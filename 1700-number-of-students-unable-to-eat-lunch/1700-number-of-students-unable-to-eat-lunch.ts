function countStudents(
  students: number[],
  sandwiches: number[],
  notMatch = 0
): number {
  if (students.length == notMatch || students.length == 0)
    return students.length;

  const [studentPreference, ...restStudents] = students,
    [firstSandwiche, ...restSandwiches] = sandwiches;

  return studentPreference == firstSandwiche
    ? countStudents(restStudents, restSandwiches, 0)
    : countStudents(
        [...restStudents, studentPreference],
        sandwiches,
        ++notMatch
      );
}

