const redirect = ({ route, redirect }) => {
  /**
   トップページではなく、かつ最後の文字が "/" の場合、URLの正規化を行うため末尾が"/"なしのURLにリダイレクトする

   NOTE:
     トップページを対象から外しているのはドメインのみの場合は扱いが特殊なようで、"/"をなくしたURLにredirectしようとするエラーになる
     元々"/"を付けてアクセスしても"/"なしのURLに自動変換される影響？
   */

  const lastCharacter = route.path.slice(-1)
  if (route.path !== '/' && lastCharacter === '/') {
    redirect(301, route.path.slice(0, -1))
  }
}

export default redirect