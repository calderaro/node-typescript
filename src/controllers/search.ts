import { Request, Response } from "express";
import { getClient } from "../utils/algolia";
import CustomError from "../utils/CustomError";

export default async function searchController(req: Request, res: Response) {
  try {
    const indexName = req.body.index;
    const params = req.body.params || {};

    if (!indexName) {
      throw new CustomError("index is required", "required-params", 400);
    }

    const algolia = await getClient();
    const index = algolia.initIndex(indexName);

    const search = await index.search("subs", params);
    res.status(200).json(search);
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res
        .status(error.status)
        .json({ message: error.message, code: error.name });
    }
    return res.status(500).json({ message: "error" });
  }
}
