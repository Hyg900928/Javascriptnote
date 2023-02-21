#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// 矩阵的结构体
typedef struct {
  int rows;  // 行数
  int cols;  // 列数
  double *data;  // 存储矩阵元素的一维数组
} Matrix;

// 创建一个新的矩阵
Matrix create_matrix(int rows, int cols) {
  Matrix mat;
  mat.rows = rows;
  mat.cols = cols;
  mat.data = malloc(rows * cols * sizeof(double));  // 分配一维数组内存
  if (mat.data == NULL) {
    fprintf(stderr, "Failed to allocate memory.\n");
    exit(EXIT_FAILURE);
  }
  return mat;
}

// 释放矩阵占用的内存
void free_matrix(Matrix mat) {
  free(mat.data);
}

// 数组方式实现的矩阵乘法
void matrix_multi_array(Matrix *a, Matrix *b, Matrix *c) {
  if (a->cols != b->rows) {
    fprintf(stderr, "Invalid matrix dimensions.\n");
    exit(EXIT_FAILURE);
  }
  for (int i = 0; i < a->rows; i++) {
    for (int j = 0; j < b->cols; j++) {
      double sum = 0.0;
      for (int k = 0; k < a->cols; k++) {
        sum += a->data[i * a->cols + k] * b->data[k * b->cols + j];
      }
      c->data[i * c->cols + j] = sum;
    }
  }
}

// 指针+struct方式实现的矩阵乘法
void matrix_multi_pointer(Matrix *a, Matrix *b, Matrix *c) {
  if (a->cols != b->rows) {
    fprintf(stderr, "Invalid matrix dimensions.\n");
    exit(EXIT_FAILURE);
  }
  for (int i = 0; i < a->rows; i++) {
    for (int j = 0; j < b->cols; j++) {
      double sum = 0.0;
      for (int k = 0; k < a->cols; k++) {
        sum += *(a->data + i * a->cols + k) * *(b->data + k * b->cols + j);
      }
      *(c->data + i * c->cols + j) = sum;
    }
  }
}

int main() {
  // 初始化矩阵
  Matrix A1 = {3, 3, (double[]){2, 3, 4, 5, 6, 7, 8, 9, 10}};
  Matrix A2 = {3, 3, (double[]){7, 3, 9, 13, 6, 7, 8, 14, 10}};
  Matrix A3 = {2, 3, (double[]){7, 3, 9, 13, 6, 7}};
  Matrix A4 = {3, 2, (double[]){7, 3, 13, 6, 8, 10}};

  Matrix C1 = create_matrix(A1.rows, A2.cols);
  Matrix C2 = create_matrix(A3.rows, A4.cols);

  // 对矩阵进行乘法运算
  matrix_multi_array(&A1, &A2, &C1);
  matrix_multi_pointer(&A3, &A4, &C2);


  // 打开文件，并将结果矩阵写入文件
  FILE *fp = fopen("/Volumes/heyg/dev/Javascriptnote/learnC/HelloWorldC/result.txt", "w+");
  if (fp == NULL) {
    fprintf(stderr, "Failed to open file.\n");
    exit(EXIT_FAILURE);
  }

  // 写入结果矩阵C1
  fprintf(fp, "C 1:\n");
  for (int i = 0; i < C1.rows; i++) {
    for (int j = 0; j < C1.cols; j++) {
      fprintf(fp, "%f ", C1.data[i * C1.cols + j]);
    }
    fprintf(fp, "\n");
  }

  // 写入结果矩阵C2
  fprintf(fp, "C 2:\n");
  for (int i = 0; i < C2.rows; i++) {
    for (int j = 0; j < C2.cols; j++) {
      fprintf(fp, "%f ", *(C2.data + i * C2.cols + j));
    }
    fprintf(fp, "\n");
  }

  // 写入时间戳
  time_t now = time(NULL);
  struct tm *tm_now = localtime(&now);
  char timestamp[20];
  strftime(timestamp, sizeof(timestamp), "%Y-%m-%d %H:%M:%S", tm_now);
  fprintf(fp, "%s\n", timestamp);

  // 关闭文件
  fclose(fp);

  // 释放矩阵占用的内存
  free_matrix(C1);
  free_matrix(C2);

  return 0;
}