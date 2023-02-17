#include <stdio.h>
#include <stdlib.h>

int main() {

  // 枚举类型
  enum DAY { MON = 1, TUE, WED, THU, FRI, SAT, SUN };

  enum color { red = 1, green, blue };

  // 枚举变量
  enum color favorite_color;

  // 枚举变量
  enum DAY day;


  day = WED;
  printf("%d\n", day);

  // 枚举元素遍历
  // 遍历枚举，枚举必须是连续的，否则不支持遍历
  for(day = MON; day <= SUN; day++) {
    printf("枚举元素%d\n", day);
  }

  /* 用户输入数字来选择颜色 */
  printf("请输入你喜欢的颜色: (1. red, 2. green, 3. blue): ");
  scanf("%u", &favorite_color);

  /* 输出结果 */
  switch (favorite_color)
  {
    case red:
      printf("你喜欢的颜色是红色");
      break;
    case green:
      printf("你喜欢的颜色是绿色");
      break;
    case blue:
      printf("你喜欢的颜色是蓝色");
      break;
    default:
      printf("你没有选择你喜欢的颜色");
  }
  return 0;
}
