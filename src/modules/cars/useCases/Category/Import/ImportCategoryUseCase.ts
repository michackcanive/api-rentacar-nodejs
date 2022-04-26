import { parse } from "csv-parse";
import fs from "fs";
import { ICategoryRepository } from "../../../repositories/Category/ICategoryRepository";

interface IRequest {
  name: string;
  discricao: string;
}

class ImportCategoryUseCase {

  constructor(private categoriasreposity: ICategoryRepository) {}

  execute(file: Express.Multer.File): void {

    const stream = fs.createReadStream(file.path);
    const parseFile = parse();
    stream.pipe(parseFile);
    parseFile.on("data", async (line) => {
 
    });
  }
}

export { ImportCategoryUseCase };
