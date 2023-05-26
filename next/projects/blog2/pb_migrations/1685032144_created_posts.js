migrate((db) => {
  const collection = new Collection({
    "id": "aqiz5t422ox2jru",
    "created": "2023-05-25 16:29:04.273Z",
    "updated": "2023-05-25 16:29:04.273Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iobd80no",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("aqiz5t422ox2jru");

  return dao.deleteCollection(collection);
})
