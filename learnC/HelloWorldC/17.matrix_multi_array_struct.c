#include <stdio.h>
#include <stdlib.h>
#include <time.h>

typedef struct {
  int rows;
  int cols;
  float *data;
} matrix;

matrix create_matrix(int rows, int cols) {
  matrix m;
  m.rows = rows;
  m.cols = cols;
  m.data = malloc(rows * cols * sizeof(float));
  if (m.data == NULL) {
    fprintf(stderr, "Failed to allocate memory for matrix.\n");
    exit(EXIT_FAILURE);
  }
  return m;
}

void free_matrix(matrix m) {
  free(m.data);
}

void print_matrix(matrix m) {
  for (int i = 0; i < m.rows; i++) {
    for (int j = 0; j < m.cols; j++) {
      printf("%f ", m.data[i * m.cols + j]);
    }
    printf("\n");
  }
}

void matrix_multi_array(float a[][3], float b[][3], float c[][3], int m, int n, int p) {
  for (int i = 0; i < m; i++) {
    for (int j = 0; j < p; j++) {
      c[i][j] = 0;
      for (int k = 0; k < n; k++) {
        c[i][j] += a[i][k] * b[k][j];
      }
    }
  }
}

void matrix_multi_pointer(matrix *a, matrix *b, matrix *c) {
  if (a->cols != b->rows) {
    fprintf(stderr, "Invalid matrix size for multiplication.\n");
    exit(EXIT_FAILURE);
  }
  for (int i = 0; i < a->rows; i++) {
    for (int j = 0; j < b->cols; j++) {
      float sum = 0;
      for (int k = 0; k < a->cols; k++) {
        sum += a->data[i * a->cols + k] * b->data[k * b->cols + j];
      }
      c->data[i * c->cols + j] = sum;
    }
  }
}

int main() {
  float a1[3][3] = {
      {2, 3, 4},
      {5, 6, 7},
      {8, 9, 10}
  };
  float a2[3][3] = {
      {7, 3, 9},
      {13, 6, 7},
      {8, 14, 10}
  };
  float a3[2][3] = {
      {7, 3, 9},
      {13, 6, 7}
  };
  float a4[3][2] = {
      {7, 3},
      {13, 6},
      {8, 10}
  };
  matrix A1 = {3, 3, &a1[0][0]};
  matrix A2 = {3, 3, &a2[0][0]};
  matrix A3 = {2, 3, &a3[0][0]};
  matrix A4 = {3, 2, &a4[0][0]};
  matrix C1 = create_matrix(3, 3);
  matrix C2 = create_matrix(3, 3);
  matrix C3 = create_matrix(2, 2);
  matrix C4 = create_matrix(3, 2);
  matrix_multi_array(a1, a2, &C1.data[0][0], 3, 3, 3);
  matrix_multi_pointer(&A1, &A2, &C2);
  matrix_multi_pointer(&A3, &A4, &C3);
  matrix_multi_pointer(&A4, &A3, &C4);
  FILE *fp = fopen("/Volumes/heyg/dev/Javascriptnote/learnC/HelloWorldC/result.txt", "w");
  if (fp == NULL) {
    fprintf(stderr, "Failed to open file for writing.\n");
    exit(EXIT_FAILURE);
  }
  for (int i = 0; i < C1.rows; i++) {
    for (int j = 0; j < C1.cols; j++) {
      fprintf(fp, "%.2f ", C1.data[i * C1.cols + j]);
    }
    fprintf(fp, "\n");
  }
  for (int i = 0; i < C2.rows; i++) {
    for (int j = 0; j < C2.cols; j++) {
      fprintf(fp, "%.2f ", C2.data[i * C2.cols + j]);
    }
    fprintf(fp, "\n");
  }
  for (int i = 0; i < C3.rows; i++) {
    for (int j = 0; j < C3.cols; j++) {
      fprintf(fp, "%.2f ", C3.data[i * C3.cols + j]);
    }
    fprintf(fp, "\n");
  }
  for (int i = 0; i < C4.rows; i++) {
    for (int j = 0; j < C4.cols; j++) {
      fprintf(fp, "%.2f ", C4.data[i * C4.cols + j]);
    }
    fprintf(fp, "\n");
  }
  time_t t = time(NULL);
  struct tm *tm = localtime(&t);
  char timestamp[20];
  strftime(timestamp, sizeof(timestamp), "%Y-%m-%d %H:%M:%S", tm);
  fprintf(fp, "%s\n", timestamp);
  fclose(fp);
  free_matrix(C1);
  free_matrix(C2);
  free_matrix(C3);
  free_matrix(C4);
  return 0;
}