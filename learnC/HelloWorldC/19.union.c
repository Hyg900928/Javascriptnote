//
// Created by heyungao on 2023/2/28.
//
#include "stdio.h"
#include "string.h"

/**
 * 共用体
 * 共用体是一种特殊的数据类型，允许在相同的内存位置，存储不同的数据类型。
 * 共用体占用的内存应足够存储共用体中最大的成员
 * 在下面的实例中，Data 将占用 20 个字节的内存空间，
 * 因为在各个成员中，字符串所占用的空间是最大的。下面的实例将显示上面的共用体占用的总内存大小：
 */

/**
 * 可以定义一个带有多成员的共用体，
 * 但是任何时候只能有一个成员带有值。共用体提供了一种使用相同的内存位置的有效方式。
 */

union Data {
  int i;
  float f;
  char str[20];
};

int main() {
  union Data data;

  printf("数据所占用的内存为: %lu\n",sizeof(data));
  printf("int数据所占用的内存为: %lu\n",sizeof(int));
  printf("float数据所占用的内存为: %lu\n",sizeof(float));
  printf("char数据所占用的内存为: %lu\n",sizeof(char));

  // 访问共用体成员
  // 下面这种赋值是不正确的
  // 共用体的 i 和 f 成员的值有损坏，因为最后赋给变量的值占用了内存位置
//  data.i = 10;
//  data.f = 220.5;
//  strcpy(data.str,"C Programming");
//
//  printf( "data.i : %d\n", data.i);
//  printf( "data.f : %f\n", data.f);
//  printf( "data.str : %s\n", data.str);

  // 下面的赋值是正确的
  // 同一时间只使用一个变量
  data.i = 10;
  printf( "data.i : %d\n", data.i);

  data.f = 220.5;
  printf( "data.f : %f\n", data.f);

  strcpy( data.str, "C Programming");
  printf( "data.str : %s\n", data.str);

  return 0;
}