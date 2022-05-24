

import { parse } from "csv-parse";
import fs from "fs";


import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../../repositories/Categotery/ICategoryRepository";
interface IImportCategory {
  name: string;
  discricao: string;
}

/**
 * Import contact
 */
@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("CategoriasRepository")
    private categoriasreposity: ICategoryRepository
  ) {}

  loadCategory(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parseFile = parse();
      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, discricao] = line;

          categories.push({
            name: name,
            discricao: discricao,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categarias = await this.loadCategory(file);

    categarias.map(async (categaria) => {
      const { name, discricao } = categaria;

      const is_exest_category = await this.categoriasreposity.findByNAme(name);

      if (!is_exest_category) {
        this.categoriasreposity.create({
          name,
          discricao,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
