#include <stdio.h>
#include <stdlib.h>

// 矩阵相乘
// 求 m*k 型矩阵 A 左乘 k*n 型矩阵 B 后的 m*n 型矩阵 C

// 定义新类型
struct Matrixs {
  int elements[100][100];
  int row;
  int col;
};

// 矩阵枚举
enum matrixs {arr1 = 1, arr2, arr3, arr4};

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

/**
 * 两个矩阵相乘
 * @param matrixA
 * @param matrixB
 * @param matrixC
 */
void matrix_multi_pointer(struct Matrixs *matrixA, struct Matrixs *matrixB, struct Matrixs *matrixC) {

  // 两个矩阵相乘，必须满足矩阵A的列数等于矩阵B的行数
  if(matrixA->col != matrixB->row ) {
    printf("所选的矩阵无法相乘");
    exit(EXIT_FAILURE);
  }
  int m, k, n;
  for (m = 0; m < matrixA->row; ++m)
    for (n = 0; n < matrixB->col; ++n)
      for (k = 0; k < matrixA->col; ++k) {
        if (k == 0) matrixC->elements[m][n] = 0;//为新矩阵C每个元素初始化
        matrixC->elements[m][n] += matrixA->elements[m][k] * matrixB->elements[k][n];
      }
}

/**
 * 根据所选编号，初始化结构变量
 * @param num
 * @param matrixsD
 */
void initialMatrix(enum matrixs num, struct Matrixs *matrixsD) {
  int row, col;

  // 一个指向整数的指针
  int *ptr;
  switch (num) {
    case arr1:
      printf("选中的是a1\n");
      row = 3;
      col = 3;
      ptr = a1;
      break;
    case arr2:
      printf("选中的是a2\n");
      row = 3;
      col = 3;
      ptr = a2;
      break;
    case arr3:
      printf("选中的是a3\n");
      row = 2;
      col = 3;
      ptr = a3;
      break;
    case arr4:
      printf("选中的是a4\n");
      row = 3;
      col = 2;
      ptr = a4;
      break;
    default:
      printf("超出选择范围\n");
      break;
  }
  matrixsD->row = row;
  matrixsD->col = col;

  // 根据行数和列数，将一维数组转为多维数组
  for (int i = 0; i < row; i++)
    for(int j = 0; j < col; j++) {
      matrixsD->elements[i][j] = ptr[i * col + j];
    }

}



int main() {
  enum  matrixs num1;
  enum  matrixs num2;

  // 声明三个结构变量
  struct Matrixs matrixs1;
  struct Matrixs matrixs2;
  struct Matrixs matrixs3;

  int *slected_ptr1;
  int *slected_ptr2;

  printf("请输入两个矩阵标号: (1. a1, 2. a2, 3. a3, 4. a4): ");
  scanf("%u %u", &num1, &num2);


  // 根据所选编号初始化结构变量
  initialMatrix(num1, &matrixs1);

  initialMatrix(num2, &matrixs2);

  //矩阵相乘
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
