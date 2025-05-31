"use strict"

const { transformIncludesAndExcludes } = require("@babel/preset-env")
const SS = require("../controllers/sudoku-solver.js")

module.exports = function (app) {
   app.route("/api/check").post((req, res) => {
      let [row, column] = ['', '']

      if (!(req.body.puzzle && req.body.coordinate && req.body.value)) {res.send({"error": "Required field(s) missing"})}

      else if (req.body.puzzle.match(/[^1-9.]/)) {res.send({"error": "Invalid characters in puzzle"})}

      else if (req.body.puzzle.length != 81) {res.send({"error": "Expected puzzle to be 81 characters long"})}

      else if (req.body.value.match(/[^1-9.]/) || req.body.value.length != 1) {res.send({"error": "Invalid value"})}

      else if (req.body.coordinate.length !== 2) {res.send({"error": "Invalid coordinate"})}

      else {
         [row, column] = req.body.coordinate.split('')
         if (row.match(/[^A-I]/) || column.match(/[^1-9]/)) {res.send({"error": "Invalid coordinate"})}
         
         else {
            function update(v, c) {
               if (!v) {
                  valid = v
                  conflict.push(c)
               }
            }

            // Translate the coordinates into numeric indexs.
            row = row.charCodeAt(0) - 65
            column = Number.parseInt(column) - 1

            const puzzle = SS.string_to_array(req.body.puzzle)
            const value = Number(req.body.value)
            let [valid, conflict] = [true, []]
            let v = SS.is_row_valid(puzzle, row, value)
            update(v, "row")
            v  = SS.is_column_valid(puzzle, column, value)
            update(v, "column")
            v = SS.is_region_valid(puzzle, row, column, value)
            update(v, "region")
            if (puzzle[row][column] == value) {valid = true}

            if (valid) {res.send({valid})}
            
            else {res.send({valid, conflict})}
         }
      }
   })
    
   app.route("/api/solve").post((req, res) => {
      if (!req.body.puzzle) {res.send({"error": "Required field missing"})}

      else if (req.body.puzzle.match(/[^0-9.]/)) {res.send({"error": "Invalid characters in puzzle"})}

      else if (req.body.puzzle.length != 81) {res.send({"error": "Expected puzzle to be 81 characters long"})}

      else {
         const solution = SS.solve(SS.string_to_array(req.body.puzzle))
         if (solution) {res.send({solution})}

         else {res.send({"error": "Puzzle cannot be solved"})}
      }
   })
}
