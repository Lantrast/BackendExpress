const  pool  = require("../database.js");


//consulta todos los archivos en la base de datos
exports.getCrud = async (req, res) => {  
  try {
    const sql = 'SELECT * FROM libros';
    const [rows] = await pool.query(sql);
    res.send(rows);
  }
  catch (error) {
    return res.status(500).json({
      message: "Algo va mal"
    });
  }
};
