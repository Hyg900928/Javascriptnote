#include <stdio.h>

#define MAX 3

// 矩阵相乘
// 求 m*k 型矩阵 A 左乘 k*n 型矩阵 B 后的 m*n 型矩阵 C
struct Matrixs {
  int elements[MAX][MAX];
  int row;
  int col;
};

// 声明数组
int a1[] = {
    2, 3, 4,
    5, 6, 7,
    8, 9, 10
};
int a2[] = {
    7, 3, 9,
    13, 6, 7,
    8, 14, 10
};

int a3[] = {
    7, 3, 9,
    13, 6, 7
};

int a4[] = {
    7, 3,
    13, 6,
    8, 10
};


void matrix_multi_pointer(struct Matrixs *matrixA, struct Matrixs *matrixB, struct Matrixs *matrixC) {
  int m, k, n;
  for (m = 0; m < matrixA->row; ++m)
    for (n = 0; n < matrixB->col; ++n)
      for (k = 0; k < matrixA->col; ++k) {
        if (k == 0) matrixC->elements[m][n] = 0;//为新矩阵C每个元素初始化
        matrixC->elements[m][n] += matrixA->elements[m][k] * matrixB->elements[k][n];
      }
}

void initialMatrix(int row, int col, struct Matrixs *matrixsD, int arr[]) {

  matrixsD->row = row;
  matrixsD->col = col;
  for (int i = 0; i < row; i++)
    for(int j = 0; j < col; j++) {
      matrixsD->elements[i][j] = arr[i * col + j];
    }

}



int main() {
  int m, n, a, b;
  enum matrixs {arr1 = 1, arr2, arr3, arr4};
  int *selected_array;
  enum  matrixs num1;
  enum  matrixs num2;

  // 生明三个结构指针变量
  struct Matrixs matrixs1;
  struct Matrixs matrixs2;
  struct Matrixs matrixs3;
  struct Matrixs matrixs4;

  printf("请输入两个个矩阵标号: (1. a1, 2. a2, 3. a3, 4. a4): ");
  scanf("%u %u", &num1, &num2);
//  if(num1 == 1) {
//    selected_array = a1;
//  }

  printf("num1=%d num2=%d\n", num1, num2);
//  // 数组a1的行数
//  m = sizeof(a1) / sizeof(a1[0]);
//
//  // 数组a1的列数
//  n = sizeof(a1[0]) / sizeof(a1[0][0]);
//
//  // 数组a2的行数
//  a = sizeof(a2) / sizeof(a2[0]);
//
//  // 数组a2的列数
//  b = sizeof(a2[0]) / sizeof(a2[0][0]);

//  printf("a1行数为： %d\n", m);
//  printf("a1列数为： %d\n", n);


  // 初始化结构变量
  initialMatrix(3, 3, &matrixs1, a1);
  initialMatrix(3, 3, &matrixs2, a2);
  initialMatrix(2, 3, &matrixs3, a3);
  initialMatrix(3, 2, &matrixs4, a4);

  printf("matrixs1.row：%d\n", matrixs1.row);
  printf("matrixs1.col：%d\n", matrixs1.col);
  for(int i = 0; i < 3; i++)
    for (int j = 0; j < 3; j++) {
      printf("matrixs1[elements][%d][%d]: %d\n", i, j, matrixs1.elements[i][j]);
    }

  for(int i = 0; i < 3; i++)
    for (int j = 0; j < 3; j++) {
      printf("matrixs2[elements][%d][%d]: %d\n", i, j, matrixs2.elements[i][j]);
    }
  matrix_multi_pointer(&matrixs1, &matrixs2, &matrixs3);

  printf("\n矩阵a1左乘矩阵a2为：\n\n");
  for (int i = 0; i< matrixs1.row; ++i)
  {
    printf("  |");
    for (int j = 0; j < matrixs2.col; ++j)
    {
      printf(" %-6d",matrixs3.elements[i][j]);
    }
    printf("\b\b|\n");
  }
  printf("\n");

  return 0;
}
