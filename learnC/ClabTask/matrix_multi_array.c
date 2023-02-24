//
// Created by heyungao on 2023/2/17.
//
#include "matrix.h"

void free_matrix(float **arr, int row) {
  for (int i = 0; i < row; i++) {
    free(arr[i]);
  }
  free(arr);
}

/**
 * 将一维数组转换位二维数组
 * @param arr 一维数组
 * @param rows 转换的二维数组的行数
 * @param cols 转换的二维数组的列数
 * @return 返回新的二维数组
 */
float **to_2d_array(float *arr, int rows, int cols) {
  float **result = malloc(rows * sizeof(float *));
  for (int i = 0; i < rows; i++) {
    result[i] = malloc(cols * sizeof(float));
    for (int j = 0; j < cols; j++) {
      result[i][j] = arr[i * cols + j];
    }
  }
  return result;
}

float **matrix_multi_array(float *a1, int row1, int col1, float *a2, int row2, int col2) {
  float **arr1;
  float **arr2;
  arr1 = to_2d_array(a1, row1, col1);
  arr2 = to_2d_array(a2, row2, col2);
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
  free_matrix(arr1, row1);
  free_matrix(arr2, row2);
  return result;
}
