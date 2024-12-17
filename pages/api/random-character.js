import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {

  if (request.method === "GET") {

    const character = {
        firstName: chance.first(),
        lastName: chance.last(),
        age: chance.age(),
        profession: chance.profession()
       };
       
    response.status(200).json(character);
    return;
  }
}