## Starting project

1. CourseInput component
   1. form 包裹 div 和 button, div 包裹 label 和 input
   2. 给 input 增加监听事件，设置 state，获取用户输入内容，并更新 state。
   3. 给 form 增加提交表单事件，先阻止自动跳转，之后把最新 state 作为参数传递给父组件 App。
2. CourseGoalItem component
   1. 最外层是 li，把收到的子元素包裹起来。给 li 加样式和点击事件
   2. li 对应的点击事件是删除该条 item，所以需要把 id 传给父组件，然后在父组件中写逻辑删除这个 item 组件。
3. CourseGoalList component
   1. 作为包裹 item 的组件，最外层是 ul
   2. 从父组件拿到 array 里面包含很多 obj，使用 map 把每个 obj 转换为子组件 CourseGoalItem 来展示。并需要传递过去 id，key，onDelete。
   3. delete 的方法写在了父组件中，所以这里只是传递。
4. App component
   1. 首先设置 DummyCourseGoals
   2. 设置 courseGoal 的状态（使用 useState），默认状态为 dummy
   3. 设置增添 goal 的方法，收到子组件传过来的用户输入的数组，把其推进 courseGoals 原有数组的前面 array.unshift，更新为新数组（使用 function）。与 CourseInput 组件中传输最终结果的方法相对应。最后 return 更新过的数组。
   4. App 整体 return 2 个 section，第一个是 CourseInput 组件，传递增添 goal 的方法过去即可。第二个是 conditional content，所以需要在上面把逻辑判断好，return 这里直接放最终确认的 content 变量即可。
   5. const deleteItemHandler（App 里的名字），先传给 List(名字是 onDeleteItem)，List 接到后再传给 Item（名字是 onDelete），最后在 Item 里调用传参进去.
      此 function 其实还是重新设置 goal 的 array，用 filter 把 id 不等需要删除的 id 的 obj 拿出来组成新的 array，然后更新 array 的 state 即可
   6. 设置 conditional content: let content 是一句话（默认），然后加判断条件，如果 array 有长度，那么 content 就变为 List 这个组件，并把 array 和 deleteItemHandler 传过去）
5. UI 组件中的 Button，给 Button 单独设计一个组件，这样有需要这个格式的 button 都可以套壳使用。因为是壳子，所以很多属性都要依赖 props 的相关内容，不需要定死。
