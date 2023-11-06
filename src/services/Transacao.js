import { db } from "./SQLite";

export function criaTabela() {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS transacao (id INTEGER PRIMARY KEY AUTOINCREMENT, valor REAL, categoria TEXT, texto TEXT, data TEXT, fixo BOOLEAN);"
    );
  });
}

export const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO transacao (valor, categoria, texto, data, fixo) values (?,?,?,?,?)",
        [obj.valor, obj.categoria, obj.texto, obj.data, obj.fixo]
      ),
        () => {
          resolve("Sucesso adicionando transacao!");
        };
    });
  });
};

export const busca = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM transacao;",
        [],
        //-----------------------
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

export const deletar = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM transacao WHERE id = ?",
        [id],
        () => {
          resolve("Sucesso removendo transacao!");
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};

export const buscaData = (date) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM transacao WHERE data=? OR fixo=?;",
        [date, true],
        //-----------------------
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};


export const atualizar = (obj, id) => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql("UPDATE transacao SET valor=?, categoria=?, texto=?, data=?, fixo=? WHERE id=?;", [obj.valor, obj.categoria, obj.texto, obj.data, obj.fixo, id], () => {
        resolve("Transacao atualizada com sucesso!")
      })
    })
  })
}
