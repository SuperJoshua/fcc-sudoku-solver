"use strict"

class SudokuSolver {
   /*
   It doesn't make sense to keep this method. What it should do is already fulfilled in api.js, and trying to incorporate it screws up my if-else structure. Also, I'd rather separate input checking and puzzle solving. What's the word for that? Anyway, I'd rather the solver assumne correct input.
   
   static validate(puzzle) {}
   */

   // The rows are A-I and the columns are 1-9. This feels awkward, but I'll roll with (and around) it. The FCC Python course already has a Sudoku solver that I went through, and I've tried to adapt it to suit this project.

   static find_empty_cell(puzzle) {
      for (const [row, contents] of puzzle.entries()) {
         const col = contents.indexOf(0)
         if (col != -1) {return [row, col]}
      }
      
      return null
   }

   static is_row_valid(puzzle, row, num) {
      return !(puzzle[row].includes(num))
   }

   static is_column_valid(puzzle, col, num) {
      const test = Array(9)
      let test_index = 0
      for (let row = 0; row < 9; row += 1) {
         test[test_index] = puzzle[row][col]
         test_index += 1
      }
      
      return test.every(x => x != num)
   }

   static is_region_valid(puzzle, row, col, num) {
      const row_start = Math.floor(row / 3) * 3
      const col_start = Math.floor(col / 3) * 3
      for (let row_no = row_start; row_no < row_start + 3; row_no += 1) {
         for (let col_no = col_start; col_no < col_start + 3; col_no += 1) {
            if (puzzle[row_no][col_no] == num) {
               return false
            }
         }
      }
      
      return true
   }

   static is_all_valid(puzzle, empty, num) {
      const [row, col] = empty
      const is_row_valid = this.is_row_valid(puzzle, row, num)
      const is_column_valid = this.is_column_valid(puzzle, col, num)
      const is_region_valid = this.is_region_valid(puzzle, row, col, num)
      
      return [is_row_valid, is_column_valid, is_region_valid].every(x => x)
   }

   static solve(puzzle) {
      const next_empty = this.find_empty_cell(puzzle)
      if (!next_empty) {return true}
      
      for (let guess = 1; guess < 10; guess += 1) {
         if (this.is_all_valid(puzzle, next_empty, guess)) {
            const [row, col] = next_empty
            puzzle[row][col] = guess
            if (this.solve(puzzle)) {return this.array_to_string(puzzle)}
            
            puzzle[row][col] = 0
         }
      }
      
      return false
   }
   
   static string_to_array(string) {
      const array = Array(9)
      for (let row = 0; row < 9; row += 1) {
         array[row] = string.slice(row * 9, row * 9 + 9).split('')
         for (let col = 0; col < 9; col += 1) {
            if (array[row][col] == '.') {array[row][col] = 0}
            else {array[row][col] = Number(array[row][col])}
         }
      }

      return array
   }
   
   static array_to_string(array) {
      return array.flat().join('')
   }
}

module.exports = SudokuSolver
