const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // listar todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // obter UM registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not Found
      return response.json({ error: 'User not found!' });
    }
    response.json(contact);
  }

  store() {
    // criar um novo registro
  }

  update() {
    // editar um registro
  }

  async delete(request, response) {
    // deletar um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not Found
      return response.json({ error: 'User not found!' });
    }
    await ContactsRepository.delete(id);

    // 204: No Content
    response.sendStatus(204);
  }
}

// singleton
module.exports = new ContactController();
