# Robotic Hoover

This programme navigates an imaginary robotic hoover through an imaginary room. It works on the command line, it takes a `.txt` file as an input and returns a standard output. Further details below.

## Technology

- Node.js
- Jest

## Input

The programme takes a `.txt` file as an input.

Example:

`input.txt`

```txt
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```

- The first line holds the room dimensions (X Y), separated by a single space (allcoordinates will be presented in this format),
- The second line holds the hoover position,
- Subsequent lines contain the zero or more positions of patches of dirt (one perline),
- The next line then always contains the driving instructions as cardinal directions (at least one).

## Output

The programme returns a standard output (STDOUT) in the terminal.

```md
1 3
1
```

- The first line of your program output should display the X and Y coordinatesmarking the position of the hoover after processing all commands.
- The second line of the program output should display the number of patches of dirt the robot cleaned up.

## User stories

```md
As a user,
So I can find easily my hoover,
I want to know its final location.

As a user,
So I can know if I need to empty my hoover,
I want to know how many dirt has been cleaned up.
```
