const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  deleteContactById,
  updateContactById,
  addContact,
  updateStatusContact,
} = require("../../controllers/contacts-controllers");
const { contactsAddSchema, updateFavoriteSchema } = require("../../schemas/contacts-schemas");
const {validateBody, validateAddContact} = require("../../decorators/validate");

router.get("/", getAllContacts);

router.get("/:contactId", getContactById);

router.post("/", validateAddContact, addContact);

router.delete("/:contactId", deleteContactById);

router.put("/:contactId", validateBody(contactsAddSchema), updateContactById);

router.patch("/:contactId/favorite", validateBody(updateFavoriteSchema), updateStatusContact);

module.exports = router;