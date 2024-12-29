export async function GET(_: Request) {
  const names = ['しまぶー', '山田太郎', '佐藤花子', '鈴木一郎', '高橋愛', '伊藤健一', '中村美咲', '小林優斗', '加藤真由美', '吉田翔', '山本彩', '松本蓮', '井上美優', '林直樹', '清水彩花', '森大輔', '橋本結衣', '石川駿', '木村愛美', '斎藤拓海', '池田咲良', '阿部陽介', '中島美穂', '藤田海斗', '岡本千尋', '三浦誠', '金子莉乃', '山下悠斗', '村上陽菜', '青木拓真', '石田和香']
  const name = names[Math.floor(Math.random() * names.length)]
  return Response.json(name)
}
