/**
 * Servicio de Usuarios
 * Contiene la lógica de negocio para gestionar usuarios
 * 
 * Nota: Actualmente almacenamos en memoria con un array
 * Esta semana lo conectaremos a una base de datos real
 */

// Almacenamiento temporal en memoria (SOLO para desarrollo)
let usuarios = [];
let idContador = 1;

/**
 * Crear un nuevo usuario
 * @param {Object} datosUsuario - { nombre, apellido, email, edad }
 * @returns {Object} El usuario creado
 */
const crearUsuario = (datosUsuario) => {
  const nuevoUsuario = {
    id: idContador++,
    ...datosUsuario,
    fechaRegistro: new Date().toISOString()
  };

  usuarios.push(nuevoUsuario);
  return nuevoUsuario;
};

/**
 * Obtener todos los usuarios*
 * @returns {Array} Array de todos los usuarios
 */
// TODO: Completa esta función
const obtenerTodosLosUsuarios = () => {
  return usuarios; 
  // Ayudita: Solo retorna el array de usuarios
  // Hazlo simple: return usuarios;
};

/**
 * Obtener un usuario por ID
 * @param {Number} id - ID del usuario
 * @returns {Object|null} El usuario encontrado o null
 */
// TODO: Completa esta función
const obtenerUsuarioPorId = (id) => {
  return usuarios.find(usuario => usuario.id === parseInt(id));
  // Ayudita: Usa .find() para buscar en el array
  // Ejemplo: usuarios.find(usuario => usuario.id === parseInt(id))
};

/**
 * Actualizar un usuario existente
 * @param {Number} id - ID del usuarios
 * @param {Object} datosActualizados - Campos a actualizar
 * @returns {Object|null} El usuario actualizado o null si no existe
 */
// TODO: Completa esta función
const actualizarUsuario = (id, datosActualizados) => {
  const indice = usuarios.findIndex(usuario => usuario.id === parseInt(id));
   
  if (indice !== -1){
    //combinar datos
    usuarios[indice] = {...usuarios[indice], ...datosActualizados };
    return usuarios[indice];

  }
  return null;
  // Ayudita: 
  // 1. Busca el usuario con .findIndex()
  // 2. Si no existe, retorna null
  // 3. Si existe, actualiza los campos: usuarios[index] = { ...usuarios[index], ...datosActualizados }
  // 4. Retorna el usuario actualizado
};

/**
 * Eliminar un usuario (Bonus - no es requerido)
 * @param {Number} id - ID del usuario
 * @returns {boolean} true si se eliminó, false si no existe
 */
const eliminarUsuario = (id) => {
  const index = usuarios.findIndex(usuario => usuario.id === parseInt(id));
  if (index === -1) return false;
  usuarios.splice(index, 1);
  return true;
};

module.exports = {
  crearUsuario,
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
};
