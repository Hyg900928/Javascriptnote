//
// Created by heyungao on 2023/2/17.
//
#include "matrix.h"


float **matrix_multi_array(int row1, int col1, int row2, int col2, float **arr1, float **arr2) {
  float **result = malloc(row1 * sizeof(float *));
  if (col1 != row2) {
    printf("matrix_multi_array：所选的矩阵无法相乘\n");
    exit(EXIT_FAILURE);
  }
  for (int i = 0; i < row1; i++) {
    result[i] = malloc(col2 * sizeof(float));
    for (int j = 0; j < col2; j++) {
      result[i][j] = 0;
      for (int k = 0; k < col1; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return result;
}
