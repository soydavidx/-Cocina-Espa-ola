// Conectar a la base de datos
const db = connect("mongodb://localhost:27017/nombre_de_tu_base_de_datos");

// Consulta 1: Mostrar todos los documentos
print("Consulta 1:");
db.restaurantes.find().forEach(printjson);

// Consulta 2: Mostrar campos específicos
print("Consulta 2:");
db.restaurantes.find({}, { id_restaurante: 1, nombre: 1, distrito: 1, cocina: 1 }).forEach(printjson);

// Consulta 3: Excluir el campo _id
print("Consulta 3:");
db.restaurantes.find({}, { _id: 0, id_restaurante: 1, nombre: 1, distrito: 1, cocina: 1 }).forEach(printjson);

// Consulta 4: Incluir código postal y excluir _id
print("Consulta 4:");
db.restaurantes.find({}, { _id: 0, id_restaurante: 1, nombre: 1, distrito: 1, "dirección.código_postal": 1 }).forEach(printjson);

// Consulta 5: Restaurantes en el distrito "Centro"
print("Consulta 5:");
db.restaurantes.find({ distrito: "Centro" }).forEach(printjson);

// Consulta 6: Primeros 5 restaurantes en "Centro"
print("Consulta 6:");
db.restaurantes.find({ distrito: "Centro" }).limit(5).forEach(printjson);

// Consulta 7: Siguientes 5 restaurantes en "Centro"
print("Consulta 7:");
db.restaurantes.find({ distrito: "Centro" }).skip(5).limit(5).forEach(printjson);

// Consulta 8: Puntaje superior a 5 en calificaciones
print("Consulta 8:");
db.restaurantes.find({ "calificaciones.puntaje": { $gt: 5 } }).forEach(printjson);

// Consulta 9: Puntaje entre 7 y 10
print("Consulta 9:");
db.restaurantes.find({ "calificaciones.puntaje": { $gt: 7, $lt: 10 } }).forEach(printjson);

// Consulta 10: Latitud menor que 3.723340
print("Consulta 10:");
db.restaurantes.find({ "dirección.coordenadas.1": { $lt: 3.723340 } }).forEach(printjson);