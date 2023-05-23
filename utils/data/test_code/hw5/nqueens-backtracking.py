

class Solution:
    def solveNQueens(self, table_size: int):
        col = set()
        posDiag = set()  # (r + c)
        negDiag = set()  # (r - c)

        solution_list = []
        board = [["."] * table_size for i in range(table_size)]

        def backtrack(queens_placed):
            # base case (all queens are placed)
            if queens_placed == table_size:
                copy_of_board = ["".join(row) for row in board]
                solution_list.append(copy_of_board)
                return

            for column in range(table_size):
                # check if the column or diagonal is occupied
                if column in col or (queens_placed + column) in posDiag or (queens_placed - column) in negDiag:
                    continue

                # place the queen
                col.add(column)
                posDiag.add(queens_placed + column)
                negDiag.add(queens_placed - column)
                board[queens_placed][column] = "Q"

                backtrack(queens_placed + 1) # Try to place the next queen

                # backtrack
                col.remove(column)
                posDiag.remove(queens_placed + column)
                negDiag.remove(queens_placed - column)
                board[queens_placed][column] = "."

        backtrack(0)
        return solution_list
    
    def check_place(self, positions, ocuppied_rows, column):
        """
        Check if a given position is under attack from any of
        the previously placed queens (check column and diagonal positions)
        """
        
        for i in range(ocuppied_rows):
            if positions[i] == column or \
                positions[i] - i == column - ocuppied_rows or \
                positions[i] + i == column + ocuppied_rows:

                return False
        return True

    def show_full_board(self, positions, size = 4):
        """Show the full NxN board"""
        for row in range(size):
            line = ""
            for column in range(size):
                line+=positions[row][column]+ " "
            print(line)
        print("\n")

    def prettyPrintSolutions(self, solutions, size):
        for solution in solutions:
            self.show_full_board(solution, size)

sol = Solution()
SIZE = 4

solutions = sol.solveNQueens(SIZE)
sol.prettyPrintSolutions(solutions, SIZE)
