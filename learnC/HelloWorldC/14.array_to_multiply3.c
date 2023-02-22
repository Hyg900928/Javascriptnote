#include <stdio.h>
#include <stdlib.h>

float **matrix_multi(float **matrix1, int rows1, int cols1, float **matrix2, int rows2, int cols2);

int main() {
  float matrix1_data[2][3] = {{1.000000, 2.000000, 3.000000}, {4.000000, 5.000000, 6.000000}};

  float matrix2_data[3][2] = {{7.000000, 8.000000}, {9.000000, 10.000000}, {11.000000, 12.000000}};

  float **matrix1 = malloc(2 * sizeof(float *));
  for (int i = 0; i < 2; i++) {
    matrix1[i] = malloc(3 * sizeof(float));
    for (int j = 0; j < 3; j++) {
      matrix1[i][j] = matrix1_data[i][j];
    }
  }

  float **matrix2 = malloc(3 * sizeof(float *));
  for (int i = 0; i < 3; i++) {
    matrix2[i] = malloc(2 * sizeof(float));
    for (int j = 0; j < 2; j++) {
      matrix2[i][j] = matrix2_data[i][j];
    }
  }

  float **result = matrix_multi(matrix1, 2, 3, matrix2, 3, 2);

  printf("The result of matrix multiplication is:\n");
  for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
      printf("%f ", result[i][j]);
    }
    printf("\n");
  }

  for (int i = 0; i < 2; i++) {
    free(matrix1[i]);
  }
  free(matrix1);

  for (int i = 0; i < 3; i++) {
    free(matrix2[i]);
  }
  free(matrix2);

  for (int i = 0; i < 2; i++) {
    free(result[i]);
  }
  free(result);

  return 0;
}

float **matrix_multi(float **matrix1, int rows1, int cols1, float **matrix2, int rows2, int cols2) {
  if (cols1 != rows2) {
    printf("Error: the number of columns of matrix1 must equal to the number of rows of matrix2\n");
    return NULL;
  }

  float **result = malloc(rows1 * sizeof(float *));
  for (int i = 0; i < rows1; i++) {
    result[i] = malloc(cols2 * sizeof(float));
    for (int j = 0; j < cols2; j++) {
      result[i][j] = 0;
      for (int k = 0; k < cols1; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return result;
}