#include <stdio.h>
#include <stdlib.h>

int **to_2d_array(int *arr, int rows, int cols);

int main() {
  int arr[] = {1, 2, 3, 4, 5, 6};
  int rows = 2;
  int cols = 3;
  int **result = to_2d_array(arr, rows, cols);

  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
      printf("%d ", result[i][j]);
    }
    printf("\n");
  }

  for (int i = 0; i < rows; i++) {
    free(result[i]);
  }
  free(result);

  return 0;
}

/**
 * 该函数首先使用 malloc() 函数动态分配了一个二维数组 result，其中有 rows 行，每行有 cols 个整数。
 * 然后，该函数使用两个 for 循环将一维数组 arr 的元素逐个赋值给 result 中对应的位置。
 * 最后，该函数返回转换后的二维数组 result。
 *
 * 请注意，在使用完返回的二维数组后，需要调用 free() 函数释放其动态分配的内存。
 * @param arr
 * @param rows
 * @param cols
 * @return
 */
int **to_2d_array(int *arr, int rows, int cols) {
  int **result = malloc(rows * sizeof(int *));
  for (int i = 0; i < rows; i++) {
    result[i] = malloc(cols * sizeof(int));
    for (int j = 0; j < cols; j++) {
      result[i][j] = arr[i * cols + j];
    }
  }
  return result;
}