SIZE = 8


def solve():
    solutions = 1
    positions = [-1, -1, -1, -1, -1, -1, -1, -1]
    solutions = attempt_placing_queen(positions, 0, solutions, SIZE)


def show_solution(positions):
    """
    Show the queens positions on the board in compressed form,
    each number represent the occupied column position in the corresponding row.

    Args:
        positions (List<Positions>): List of positions
    """
    bar = "_"*SIZE*4
    print(bar)
    for row in range(SIZE):

        row_line = ""
        for column in range(SIZE):
            if positions[row] == column:
                row_line += " 1 |"
            else:
                row_line += " 0 |"
        print(row_line)
        print(bar)
    print("\n")

def check_no_queens_attacking_at_queen_in_row(positions, ocuppied_rows, column):
    """Check if a given position is under attack from any of the previously placed queens (check column and diagonal positions)

    Args:
        positions (List<Positions>): List of positions
        ocuppied_rows (int): count queens (how much diagonally for it to move)
        column (int): column being attempted in wchih we are trying to place a queen

    Returns:
        Boolean: False if there is a queen attacking the queen in the row
    """
    
    for i in range(ocuppied_rows):
        is_same_column = positions[i] == column
        is_same_positve_diagonal = positions[i] - i == column - ocuppied_rows 
        is_same_negative_diagonal = positions[i] + i == column + ocuppied_rows
        
        if  is_same_column or is_same_positve_diagonal or is_same_negative_diagonal:
            return False
        
    return True


def attempt_placing_queen(positions, target_row, solutions, SIZE):
    """
    Place a queen on the next row until all N queens are placed on the NxN board.
    
    Args:
        positions (List<Positions>): List of positions
        target_row (int): row being attempted in wchih we are trying to place a queen
        solutions (int): count solutions
        SIZE (int): size of the board

    Returns:
        int: solutions count 
    """
    if target_row == SIZE:
        print("solution: " + str(solutions))
        show_solution(positions)
        solutions += 1
    else:
        for column_to_test in range(SIZE):
            if check_no_queens_attacking_at_queen_in_row(positions, target_row, column_to_test):
                positions[target_row] = column_to_test
                solutions = attempt_placing_queen(positions, target_row + 1, solutions, SIZE)
            else:
                # Do nothing, fails the test
                continue
    return solutions



solve()




