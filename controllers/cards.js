const Card = require('../models/card');

const getCards = (req, res) =>
  Card.find()
    .populate('owner')
    .then((cards) => res.status(200).send(cards))
    .catch(() => res.status(500).send({ message: 'Ошибка на сервере' }));

const createCard = (req, res) => {
  const { name, link } = req.body;
  const ownerId = req.user._id;

  return Card.create({ name, link, owner: ownerId })
    .then((card) => res.status(201).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({
          message: `${Object.values(err.errors)
            .map((error) => error.message)
            .join(', ')}`,
        });
      } else {
        return res.status(500).send({ message: 'Ошибка на сервере' });
      }
    });
};

const deleteCard = (req, res) => {
  const { cardId } = req.params;

  if (cardId.length === 24) {
    return Card.findByIdAndRemove(cardId)
      .then((card) => {
        if (!card) {
          return res
            .status(404)
            .send({ message: 'Запрашиваемая карточка не найдена' });
        } else {
          return res.status(200).send(card);
        }
      })
      .catch(() => res.status(500).send({ message: 'Ошибка на сервере' }));
  } else {
    return res.status(400).send({ message: 'Передан некорректный id' });
  }
};

const likeCard = (req, res) => {
  const { cardId } = req.params;

  if (cardId.length === 24) {
    Card.findByIdAndUpdate(
      cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true }
    )
      .then((card) => {
        if (!card) {
          return res
            .status(404)
            .send({ message: 'Запрашиваемая карточка не найдена' });
        } else {
          return res.status(200).send(card);
        }
      })
      .catch(() => res.status(500).send({ message: 'Ошибка на сервере' }));
  } else {
    return res.status(400).send({ message: 'Передан некорректный id' });
  }
};

const dislikeCard = (req, res) => {
  const { cardId } = req.params;

  if (cardId.length === 24) {
    Card.findByIdAndUpdate(
      cardId,
      { $pull: { likes: req.user._id } },
      { new: true }
    )
      .then((card) => {
        if (!card) {
          return res
            .status(404)
            .send({ message: 'Запрашиваемая карточка не найдена' });
        } else {
          return res.status(200).send(card);
        }
      })
      .catch(() => res.status(500).send({ message: 'Ошибка на сервере' }));
  } else {
    return res.status(400).send({ message: 'Передан некорректный id' });
  }
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
