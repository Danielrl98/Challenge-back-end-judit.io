import listModel from "../../models/list/listModel";

export const createList = {
  async create() {
    const list = await listModel.findOne({ id: 0 });
    const methods = ["backlog", "discover", "lead", "deal", "archived"];

    if (list) {
      return;
    } else {
      try {
        for (let index = 0; index < methods.length; index++) {
          await new listModel({
            id: index,
            name: methods[index],
          }).save();
        }
      } catch (error) {
        throw new Error("Error register list: " + error)
      }
    }
  },
};
