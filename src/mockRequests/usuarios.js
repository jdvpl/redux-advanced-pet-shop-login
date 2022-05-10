export const usuarios = [
    {username: 'test', password: 'test', fullName: 'Prueba Test'},
    {username: 'peter', password: '12345', fullName: 'Pedro Stevens'},
    {username: 'maria', password: '12345', fullName: 'Maria Mendoza'},
    {username: 'john', password: 'john123', fullName: 'John Doe'},
    {username: 'jdvpl', password: 'kakaroto', fullName: 'Juan Daniel Suarez'},
]

export const login = (username, password) => {
    const usuarioEncontrado = usuarios.find(user => username === user.username && password === user.password);
    return usuarioEncontrado || { error: "No hemos encontrado un usuario, por favor intentalo nuevamente"}
}

export default {
    login,
    usuarios,
}