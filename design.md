# Design

## Notes on selected design choices

### Short-circuiting operators as control flow

Considering the following example, representative of a C-like language:
```c++
if (tryA() && tryB()) {
  doStuff();
}
```
This could be equivalently written:
```c++
if (tryA()) {
  if (tryB()) {
    doStuff();
  }
}
```
Here the second `if` corresponds directly to the `&&` operator in the first example, from which we can observe that `&&` actually branches the programmatic flow.  This suggests that short-circuiting operators like these are not so much pure logical operators as they are control flow operators.
Therefore, for the purposes of highlighting, we choose to categorize and color them like other control flow keywords to similarly indicate that code following them is conditionally executed.
