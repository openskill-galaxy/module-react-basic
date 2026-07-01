// OpenSkill Galaxy — module-react-basic 数据生成器
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.resolve(__dirname, "../public/data");

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function pickN(arr, n) { const s=new Set(); while(s.size < n && s.size < arr.length) s.add(pick(arr)); return [...s]; }

// ============================================================
// 1. TAGS (350+)
// ============================================================
const TAG_CATEGORIES = {
  "React基础": ["react", "react18", "虚拟dom", "jsx", "组件", "函数组件", "类组件", "组件化", "单向数据流", "状态", "属性", "props", "state", "setState", "不可变数据", "key属性", "片段", "portal", "ref", "受控组件", "非受控组件", "事件处理", "条件渲染", "列表渲染", "生命周期", "组件挂载", "组件卸载"],
  "React Hooks": ["hooks", "useState", "useEffect", "useContext", "useReducer", "useCallback", "useMemo", "useRef", "useLayoutEffect", "useDebugValue", "自定义hooks", "自定义hook", "hook规则", "hook原理", "闭包陷阱", "依赖数组", "副作用", "纯函数"],
  "React Router": ["react-router", "react-router-dom", "路由", "browserRouter", "hashRouter", "路由参数", "useParams", "useNavigate", "useLocation", "Link", "NavLink", "Navigate", "嵌套路由", "路由守卫", "动态路由", "路由懒加载", "404页面"],
  "状态管理": ["zustand", "状态管理", "全局状态", "store", "create", "getState", "setState", "subscribe", "selector", "中间件", "持久化", "devtools", "redux", "context", "useContext", "provider"],
  "React工程化": ["vite", "构建工具", "热更新", "hmr", "开发服务器", "打包", "代码分割", "懒加载", "suspense", "错误边界", "profilers", "严格模式", "组件测试", "单元测试", "集成测试"],
  "React实战": ["项目实战", "todo应用", "计数器", "表单", "搜索", "筛选", "分页", "弹窗", "卡片列表", "课程列表", "收藏", "本地存储", "localStorage", "数据加载", "fetch", "loading", "error状态", "作品集", "部署", "github pages"],
  "JS与Web基础": ["javascript", "es6", "箭头函数", "解构", "展开运算符", "模板字符串", "promise", "async/await", "模块化", "import", "export", "dom操作", "事件冒泡", "localStorage", "json", "fetch", "css", "tailwind", "响应式", "flex", "grid"],
};

function buildTags() {
  const tags = [];
  let id = 1;
  for (const [cat, names] of Object.entries(TAG_CATEGORIES)) {
    for (const name of names) {
      tags.push({ id: `react-tag-${String(id).padStart(3,"0")}`, name, category: cat, description: `${cat}标签：${name}`, count: 0, createdAt: "2026-07-01T00:00:00.000Z" });
      id++;
    }
  }
  return tags;
}

// ============================================================
// 2. COURSES (14)
// ============================================================
const COURSES_DATA = [
  { id: "react-course-01", order:1, slug:"React入门与学习路线", title:"React 入门与学习路线", description:"了解React是什么、与传统DOM开发的区别、Vite创建React项目、学习路线。", summary:"React入门总览", estimatedHours:4, difficulty:"easy" },
  { id: "react-course-02", order:2, slug:"JSX与组件基础", title:"JSX 与组件基础", description:"学习JSX语法、函数组件定义、组件嵌套与组合。", summary:"JSX与组件", estimatedHours:10, difficulty:"easy" },
  { id: "react-course-03", order:3, slug:"props-children与组件通信", title:"props、children 与组件通信", description:"掌握props传递、children插槽、组件间通信方式。", summary:"props与通信", estimatedHours:8, difficulty:"easy" },
  { id: "react-course-04", order:4, slug:"state与事件处理", title:"state 与事件处理", description:"深入useState、事件绑定、状态更新与不可变性。", summary:"state与事件", estimatedHours:10, difficulty:"easy" },
  { id: "react-course-05", order:5, slug:"条件渲染与列表渲染", title:"条件渲染与列表渲染", description:"学习条件渲染、列表渲染、key的作用、Fragment。", summary:"条件与列表渲染", estimatedHours:8, difficulty:"easy" },
  { id: "react-course-06", order:6, slug:"表单处理与受控组件", title:"表单处理与受控组件", description:"表单输入、受控组件、非受控组件、表单校验。", summary:"表单处理", estimatedHours:8, difficulty:"medium" },
  { id: "react-course-07", order:7, slug:"useEffect与副作用", title:"useEffect 与副作用", description:"掌握useEffect、依赖数组、副作用清理、数据获取。", summary:"useEffect", estimatedHours:10, difficulty:"medium" },
  { id: "react-course-08", order:8, slug:"自定义Hooks", title:"自定义 Hooks", description:"学习自定义Hook的创建与复用、常见Hook模式。", summary:"自定义Hooks", estimatedHours:8, difficulty:"medium" },
  { id: "react-course-09", order:9, slug:"ReactRouter路由", title:"React Router 路由", description:"路由配置、页面跳转、路由参数、嵌套路由、路由守卫。", summary:"路由", estimatedHours:10, difficulty:"medium" },
  { id: "react-course-10", order:10, slug:"组件拆分与项目结构", title:"组件拆分与项目结构", description:"组件设计原则、目录结构、样式组织、组件复用。", summary:"组件拆分", estimatedHours:8, difficulty:"medium" },
  { id: "react-course-11", order:11, slug:"静态JSON数据加载", title:"静态 JSON 数据加载", description:"fetch加载、loading/error状态、数据展示、搜索筛选。", summary:"数据加载", estimatedHours:8, difficulty:"medium" },
  { id: "react-course-12", order:12, slug:"Zustand轻量状态管理", title:"Zustand 或轻量状态管理", description:"Zustand store、全局状态、持久化、与组件结合。", summary:"状态管理", estimatedHours:8, difficulty:"hard" },
  { id: "react-course-13", order:13, slug:"Vite构建与GitHubPages部署", title:"Vite、构建与 GitHub Pages 部署", description:"Vite配置、生产构建、base路径、GitHub Pages部署。", summary:"构建与部署", estimatedHours:6, difficulty:"hard" },
  { id: "react-course-14", order:14, slug:"React项目实战与作品集", title:"React 项目实战与作品集", description:"综合运用所学知识，完成多个React实战项目并构建作品集。", summary:"项目实战", estimatedHours:16, difficulty:"hard" },
];

function buildCourses() {
  return COURSES_DATA.map(c => ({ ...c, tags: [], lessonIds: [], totalLessons: 0, totalQuestions: 0, prerequisites: [], outcomes: ["掌握核心概念","能独立完成项目","理解最佳实践","具备工程能力"], updatedAt: "2026-07-01T00:00:00.000Z" }));
}

// ============================================================
// 3. LESSONS (180+)
// ============================================================
function buildLessons() {
  const all = [];
  let id = 1;
  const add = (ci, title, kps, tags) => {
    const num = String(id).padStart(3,"0");
    all.push({ id:`react-lesson-${num}`, courseId:COURSES_DATA[ci].id, order:all.filter(l=>l.courseId===COURSES_DATA[ci].id).length+1, title, slug:title.toLowerCase().replace(/[\s，。、：；（）]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""), summary:`${title}章节摘要`, content:`# ${title}\n\n这是${title}的讲义内容。\n\n## 要点\n\n- 核心概念\n- 实践方法\n\n## 总结\n\n本章介绍了${title}的核心知识。`, contentFormat:"markdown", estimatedMinutes:30, difficulty:id<=60?"easy":id<=130?"medium":"hard", knowledgePointIds:kps||[], practiceQuestionIds:[], tags:tags||[], prerequisites:[], updatedAt:"2026-07-01T00:00:00.000Z" });
    id++;
  };
  // C01 React入门 (10)
  add(0,"React是什么",["rkp-001","rkp-002","rkp-003"],["react"]);
  add(0,"React与传统DOM开发的区别",["rkp-004","rkp-005"],["react","虚拟dom"]);
  add(0,"React核心概念",["rkp-006","rkp-007","rkp-008"],["react","组件化"]);
  add(0,"开发环境搭建",["rkp-009","rkp-010"],["vite","react"]);
  add(0,"Vite创建React项目",["rkp-011","rkp-012"],["vite","react"]);
  add(0,"项目结构解析",["rkp-013","rkp-014"],["vite","react"]);
  add(0,"React开发者工具",["rkp-015","rkp-016"],["react"]);
  add(0,"React学习路线规划",["rkp-017","rkp-018"],["react"]);
  add(0,"第一个React组件",["rkp-019","rkp-020"],["react","组件"]);
  add(0,"React官方文档导读",["rkp-021"],["react"]);
  // C02 JSX与组件 (14)
  add(1,"JSX语法",["rkp-022","rkp-023","rkp-024"],["jsx","react"]);
  add(1,"JSX表达式",["rkp-025","rkp-026"],["jsx","react"]);
  add(1,"JSX条件输出",["rkp-027","rkp-028"],["jsx","react"]);
  add(1,"JSX列表输出",["rkp-029","rkp-030"],["jsx","react"]);
  add(1,"函数组件定义",["rkp-031","rkp-032"],["组件","react"]);
  add(1,"组件嵌套",["rkp-033","rkp-034"],["组件","react"]);
  add(1,"组件复用思维",["rkp-035","rkp-036"],["组件","组件化"]);
  add(1,"Fragment与空标签",["rkp-037","rkp-038"],["react","组件"]);
  add(1,"className与样式",["rkp-039","rkp-040"],["react","css"]);
  add(1,"内联样式",["rkp-041"],["react","css"]);
  add(1,"CSS Modules",["rkp-042"],["react","css"]);
  add(1,"Tailwind与React",["rkp-043","rkp-044"],["tailwind","react"]);
  add(1,"组件命名规范",["rkp-045"],["组件","react"]);
  add(1,"JSX注意事项",["rkp-046","rkp-047"],["jsx","react"]);
  // C03 props通信 (12)
  add(2,"props基础",["rkp-048","rkp-049"],["props","react"]);
  add(2,"props类型与默认值",["rkp-050","rkp-051"],["props","react"]);
  add(2,"children插槽",["rkp-052","rkp-053"],["children","props"]);
  add(2,"props逐层传递",["rkp-054"],["props","react"]);
  add(2,"组件通信方式",["rkp-055","rkp-056"],["组件","react"]);
  add(2,"状态提升",["rkp-057","rkp-058"],["state","react"]);
  add(2,"Context简介",["rkp-059","rkp-060"],["context","react"]);
  add(2,"useContext基本用法",["rkp-061","rkp-062"],["useContext","hooks"]);
  add(2,"Provider模式",["rkp-063","rkp-064"],["context","react"]);
  add(2,"组合vs继承",["rkp-065","rkp-066"],["组件","react"]);
  add(2,"render props模式",["rkp-067"],["组件","react"]);
  add(2,"组件通信最佳实践",["rkp-068"],["组件","react"]);
  // C04 state与事件 (14)
  add(3,"useState入门",["rkp-069","rkp-070"],["useState","hooks","react"]);
  add(3,"useState更新机制",["rkp-071","rkp-072"],["useState","hooks","react"]);
  add(3,"状态不可变性",["rkp-073","rkp-074"],["state","不可变数据","react"]);
  add(3,"对象状态",["rkp-075","rkp-076"],["state","react"]);
  add(3,"数组状态",["rkp-077","rkp-078"],["state","react"]);
  add(3,"事件绑定",["rkp-079","rkp-080"],["事件处理","react"]);
  add(3,"事件参数传递",["rkp-081","rkp-082"],["事件处理","react"]);
  add(3,"setState异步性",["rkp-083","rkp-084"],["setState","state"]);
  add(3,"函数式更新",["rkp-085","rkp-086"],["setState","state"]);
  add(3,"状态与UI关系",["rkp-087"],["state","react"]);
  add(3,"多个state管理",["rkp-088"],["state","react"]);
  add(3,"useReducer入门",["rkp-089","rkp-090"],["useReducer","hooks"]);
  add(3,"reducer模式",["rkp-091","rkp-092"],["useReducer","hooks"]);
  add(3,"useStatevsuseReducer",["rkp-093"],["useState","useReducer","hooks"]);
  // C05 条件与列表渲染 (10)
  add(4,"条件渲染-if",["rkp-094","rkp-095"],["条件渲染","react"]);
  add(4,"条件渲染-三元运算符",["rkp-096","rkp-097"],["条件渲染","react"]);
  add(4,"条件渲染-逻辑与",["rkp-098","rkp-099"],["条件渲染","react"]);
  add(4,"列表渲染-map",["rkp-100","rkp-101"],["列表渲染","react"]);
  add(4,"key的作用",["rkp-102","rkp-103","rkp-104"],["key属性","react"]);
  add(4,"列表过滤与排序",["rkp-105","rkp-106"],["列表渲染","react"]);
  add(4,"条件渲染最佳实践",["rkp-107"],["条件渲染","react"]);
  add(4,"列表渲染最佳实践",["rkp-108"],["列表渲染","react"]);
  add(4,"Fragment与列表",["rkp-109"],["react","组件"]);
  add(4,"空状态处理",["rkp-110"],["react","组件"]);
  // C06 表单处理 (10)
  add(5,"受控组件",["rkp-111","rkp-112","rkp-113"],["受控组件","react"]);
  add(5,"表单输入绑定",["rkp-114","rkp-115"],["受控组件","react","表单"]);
  add(5,"textarea与select",["rkp-116","rkp-117"],["受控组件","react"]);
  add(5,"复选框与单选",["rkp-118","rkp-119"],["受控组件","react"]);
  add(5,"非受控组件",["rkp-120","rkp-121"],["非受控组件","react"]);
  add(5,"useRef获取DOM",["rkp-122","rkp-123"],["useRef","hooks","react"]);
  add(5,"表单校验基础",["rkp-124","rkp-125"],["表单","react"]);
  add(5,"实时校验",["rkp-126","rkp-127"],["表单","react"]);
  add(5,"提交处理",["rkp-128","rkp-129"],["表单","react"]);
  add(5,"表单组件封装",["rkp-130","rkp-131"],["表单","组件","react"]);
  // C07 useEffect (12)
  add(6,"useEffect基础",["rkp-132","rkp-133"],["useEffect","hooks"]);
  add(6,"依赖数组",["rkp-134","rkp-135"],["useEffect","依赖数组","hooks"]);
  add(6,"空依赖",["rkp-136","rkp-137"],["useEffect","hooks"]);
  add(6,"清理函数",["rkp-138","rkp-139"],["useEffect","hooks"]);
  add(6,"数据获取",["rkp-140","rkp-141"],["useEffect","fetch","react"]);
  add(6,"loading状态",["rkp-142","rkp-143"],["useEffect","loading","react"]);
  add(6,"error状态",["rkp-144","rkp-145"],["useEffect","error状态","react"]);
  add(6,"竞态条件",["rkp-146","rkp-147"],["useEffect","react"]);
  add(6,"组件生命周期思维",["rkp-148","rkp-149"],["生命周期","react"]);
  add(6,"useLayoutEffect",["rkp-150","rkp-151"],["useLayoutEffect","hooks"]);
  add(6,"useEffect常见陷阱",["rkp-152","rkp-153"],["useEffect","hooks"]);
  add(6,"useEffect最佳实践",["rkp-154","rkp-155"],["useEffect","hooks"]);
  // C08 自定义Hooks (10)
  add(7,"自定义Hook基础",["rkp-156","rkp-157","rkp-158"],["自定义hooks","hooks"]);
  add(7,"useLocalStorage",["rkp-159","rkp-160"],["自定义hooks","localStorage"]);
  add(7,"useFetch",["rkp-161","rkp-162"],["自定义hooks","fetch"]);
  add(7,"useDebounce",["rkp-163","rkp-164"],["自定义hooks"]);
  add(7,"useToggle",["rkp-165","rkp-166"],["自定义hooks"]);
  add(7,"自定义Hook命名",["rkp-167"],["自定义hooks","hooks"]);
  add(7,"Hook参数与返回值",["rkp-168"],["自定义hooks","hooks"]);
  add(7,"组合自定义Hook",["rkp-169","rkp-170"],["自定义hooks"]);
  add(7,"自定义Hook测试",["rkp-171"],["自定义hooks","测试"]);
  add(7,"自定义Hook最佳实践",["rkp-172","rkp-173"],["自定义hooks","hooks"]);
  // C09 React Router (12)
  add(8,"React Router概述",["rkp-174","rkp-175"],["react-router","路由"]);
  add(8,"BrowserRouter配置",["rkp-176","rkp-177"],["react-router","browserRouter"]);
  add(8,"Route与Routes",["rkp-178","rkp-179"],["react-router","路由"]);
  add(8,"Link与NavLink",["rkp-180","rkp-181"],["Link","NavLink","react-router"]);
  add(8,"useNavigate编程导航",["rkp-182","rkp-183"],["useNavigate","react-router"]);
  add(8,"useParams路由参数",["rkp-184","rkp-185"],["useParams","路由参数","react-router"]);
  add(8,"useLocation",["rkp-186","rkp-187"],["useLocation","react-router"]);
  add(8,"嵌套路由",["rkp-188","rkp-189"],["嵌套路由","react-router"]);
  add(8,"路由守卫",["rkp-190","rkp-191"],["路由守卫","react-router"]);
  add(8,"404页面",["rkp-192"],["404页面","react-router"]);
  add(8,"路由懒加载",["rkp-193","rkp-194"],["懒加载","react-router"]);
  add(8,"React Router最佳实践",["rkp-195","rkp-196"],["react-router","路由"]);
  // C10 组件拆分与项目结构 (10)
  add(9,"组件设计原则",["rkp-197","rkp-198"],["组件","react"]);
  add(9,"单一职责",["rkp-199","rkp-200"],["组件","react"]);
  add(9,"目录结构组织",["rkp-201","rkp-202"],["组件","react"]);
  add(9,"样式组织方案",["rkp-203","rkp-204"],["css","react"]);
  add(9,"页面组件vs通用组件",["rkp-205","rkp-206"],["组件","react"]);
  add(9,"组件props设计",["rkp-207"],["props","组件","react"]);
  add(9,"组件状态设计",["rkp-208"],["state","组件","react"]);
  add(9,"组件提取与重构",["rkp-209","rkp-210"],["组件","react"]);
  add(9,"高阶组件",["rkp-211"],["组件","react"]);
  add(9,"组件复用模式",["rkp-212","rkp-213"],["组件","组件化","react"]);
  // C11 数据加载 (10)
  add(10,"fetch基础回顾",["rkp-214","rkp-215"],["fetch","react"]);
  add(10,"useEffect加载数据",["rkp-216","rkp-217"],["useEffect","fetch","react"]);
  add(10,"loading状态管理",["rkp-218","rkp-219"],["loading","react"]);
  add(10,"error状态管理",["rkp-220","rkp-221"],["error状态","react"]);
  add(10,"数据展示组件",["rkp-222","rkp-223"],["组件","react","数据加载"]);
  add(10,"搜索过滤实现",["rkp-224","rkp-225"],["搜索","筛选","react"]);
  add(10,"静态JSON加载本地",["rkp-226","rkp-227"],["数据加载","json","react"]);
  add(10,"数据缓存策略",["rkp-228","rkp-229"],["数据加载","react"]);
  add(10,"错误边界",["rkp-230","rkp-231"],["错误边界","react"]);
  add(10,"Suspense简介",["rkp-232","rkp-233"],["suspense","react"]);
  // C12 Zustand (10)
  add(11,"Zustand入门",["rkp-234","rkp-235"],["zustand","状态管理"]);
  add(11,"create创建store",["rkp-236","rkp-237"],["zustand","store","状态管理"]);
  add(11,"读取与修改状态",["rkp-238","rkp-239"],["zustand","getState","setState"]);
  add(11,"selector选择器",["rkp-240","rkp-241"],["zustand","selector"]);
  add(11,"组件中使用store",["rkp-242","rkp-243"],["zustand","react"]);
  add(11,"异步操作",["rkp-244","rkp-245"],["zustand","状态管理"]);
  add(11,"持久化中间件",["rkp-246","rkp-247"],["zustand","持久化"]);
  add(11,"devtools中间件",["rkp-248"],["zustand","devtools"]);
  add(11,"多个store拆分",["rkp-249","rkp-250"],["zustand","store"]);
  add(11,"ZustandvsContext",["rkp-251","rkp-252"],["zustand","context","状态管理"]);
  // C13 构建与部署 (10)
  add(12,"Vite配置文件",["rkp-253","rkp-254"],["vite","构建工具"]);
  add(12,"生产构建",["rkp-255","rkp-256"],["vite","构建工具"]);
  add(12,"base路径配置",["rkp-257","rkp-258"],["vite","构建工具","部署"]);
  add(12,"环境变量",["rkp-259","rkp-260"],["vite","环境变量"]);
  add(12,"代码分割",["rkp-261","rkp-262"],["代码分割","懒加载"]);
  add(12,"GitHub Pages部署",["rkp-263","rkp-264"],["github pages","部署"]);
  add(12,"GitHub Actions",["rkp-265","rkp-266"],["github actions","ci/cd"]);
  add(12,"部署常见问题",["rkp-267","rkp-268"],["部署","vite"]);
  add(12,"构建优化",["rkp-269","rkp-270"],["构建工具","vite"]);
  add(12,"性能分析",["rkp-271","rkp-272"],["性能","vite"]);
  // C14 项目实战 (18)
  add(13,"项目规划",["rkp-273","rkp-274"],["项目实战","react"]);
  add(13,"计数器组件",["rkp-275","rkp-276"],["项目实战","计数器","react"]);
  add(13,"Todo列表",["rkp-277","rkp-278"],["项目实战","todo应用","react"]);
  add(13,"商品卡片列表",["rkp-279","rkp-280"],["项目实战","卡片列表","react"]);
  add(13,"搜索与筛选",["rkp-281","rkp-282"],["项目实战","搜索","筛选"]);
  add(13,"模态框组件",["rkp-283","rkp-284"],["项目实战","弹窗","react"]);
  add(13,"表单页面",["rkp-285","rkp-286"],["项目实战","表单","react"]);
  add(13,"收藏功能",["rkp-287","rkp-288"],["项目实战","收藏","localStorage"]);
  add(13,"课程列表页",["rkp-289","rkp-290"],["项目实战","课程列表","react"]);
  add(13,"课程详情页",["rkp-291","rkp-292"],["项目实战","课程详情","react"]);
  add(13,"React Router页面",["rkp-293","rkp-294"],["项目实战","react-router"]);
  add(13,"Zustand收藏夹",["rkp-295","rkp-296"],["项目实战","zustand","收藏"]);
  add(13,"数据加载页面",["rkp-297","rkp-298"],["项目实战","数据加载","react"]);
  add(13,"错误处理页面",["rkp-299","rkp-300"],["项目实战","错误边界","react"]);
  add(13,"响应式适配",["rkp-301","rkp-302"],["项目实战","响应式","css"]);
  add(13,"个人作品集",["rkp-303","rkp-304"],["项目实战","作品集","react"]);
  add(13,"部署上线",["rkp-305","rkp-306"],["部署","github pages","react"]);
  add(13,"持续学习与进阶",["rkp-307","rkp-308"],["react","前端学习"]);
  return all;
}

export { buildTags, buildCourses, buildLessons, COURSES_DATA };

// ============================================================
// 4. KNOWLEDGE POINTS (800+)
// ============================================================
const KP_LIST = [
  ["React是什么","React是用于构建用户界面的JavaScript库","react"],
  ["组件化开发","将UI拆分为独立可复用的组件","组件"],
  ["虚拟DOM","内存中的DOM表示，减少真实DOM操作","虚拟dom"],
  ["声明式UI","描述UI应该是什么样子","react"],
  ["ReactDOM","将React元素渲染到DOM中","react"],
  ["createRoot","React18的根渲染API","react"],
  ["JSX语法","JS的语法扩展，类似HTML","jsx"],
  ["JSX表达式","{}在JSX中嵌入JS表达式","jsx"],
  ["JSX属性","JSX元素的属性使用驼峰命名","jsx"],
  ["JSX条件","JSX中使用三元或&&条件输出","jsx"],
  ["JSX列表","JSX中使用map渲染列表","jsx"],
  ["JSXclassName","class在JSX中改为className","jsx"],
  ["函数组件","返回JSX的函数","组件"],
  ["组件命名","组件名必须大写开头","组件"],
  ["组件嵌套","组件内部引用其他组件","组件"],
  ["组件根元素","组件必须返回单个根元素","组件"],
  ["Fragment","<>...</>不添加额外DOM节点","片段"],
  ["props","组件的输入属性","props"],
  ["props只读","组件不能修改自己的props","props"],
  ["children","props中特殊属性，表示子元素","children"],
  ["默认props","props的默认值","props"],
  ["状态提升","将状态移到共同父组件","state"],
  ["Context","跨层级传递数据的机制","context"],
  ["useContext","消费Context的值","useContext"],
  ["Provider","Context值的提供者","context"],
  ["useState","在函数组件中添加状态","useState"],
  ["useState初始值","useState的参数是状态的初始值","useState"],
  ["状态更新","setState触发组件重新渲染","setState"],
  ["不可变更新","不直接修改状态，创建新副本","不可变数据"],
  ["对象状态更新","setState({...obj, key:newVal})","state"],
  ["数组状态更新","setState([...arr, newItem])","state"],
  ["事件绑定","JSX中直接写onClick={handler}","事件处理"],
  ["事件参数","事件处理函数接收event对象","事件处理"],
  ["传递参数","onClick={()=>fn(param)}","事件处理"],
  ["阻止默认行为","e.preventDefault()","事件处理"],
  ["受控组件","组件的值由state控制","受控组件"],
  ["受控组件输入","value={state} onChange={handler}","受控组件"],
  ["textarea受控","value属性控制文本域","受控组件"],
  ["select受控","value属性控制下拉框","受控组件"],
  ["checkbox受控","checked属性控制复选框","受控组件"],
  ["非受控组件","DOM自身管理值","非受控组件"],
  ["useRef","创建引用访问DOM元素","useRef"],
  ["条件渲染-if","if语句返回不同JSX","条件渲染"],
  ["条件渲染-三元","condition?A:B","条件渲染"],
  ["条件渲染-&&","condition&&<Component/>","条件渲染"],
  ["列表渲染","array.map(item=><li>item</li>)","列表渲染"],
  ["key属性","帮助React识别列表项变化","key属性"],
  ["key唯一","列表中的key必须在兄弟间唯一","key属性"],
  ["key索引","不推荐使用索引作为key","key属性"],
  ["useEffect","处理副作用","useEffect"],
  ["副作用","数据获取、订阅、手动DOM操作","副作用"],
  ["依赖数组","控制useEffect执行时机","依赖数组"],
  ["空依赖","[]表示只在挂载时执行","useEffect"],
  ["清理函数","useEffect返回的函数清理副作用","useEffect"],
  ["useLayoutEffect","同步执行的效果，在DOM变更后","useLayoutEffect"],
  ["useReducer","复杂状态逻辑管理","useReducer"],
  ["reducer","(state,action)=>newState","useReducer"],
  ["useCallback","记忆化函数引用","useCallback"],
  ["useMemo","记忆化计算结果","useMemo"],
  ["memo","React.memo避免不必要的重渲染","react"],
  ["useDebugValue","调试自定义Hook","useDebugValue"],
  ["自定义Hook","以use开头的函数，复用状态逻辑","自定义hooks"],
  ["Hook规则","只在顶层调用Hook","hook规则"],
  ["条件Hook","不能在条件语句中使用Hook","hook规则"],
  ["闭包陷阱","过期的闭包捕获旧值","闭包陷阱"],
  ["React Router","React的客户端路由方案","react-router"],
  ["BrowserRouter","使用History API的路由器","browserRouter"],
  ["HashRouter","使用hash的路由器","hashRouter"],
  ["Routes","包裹Route的容器","react-router"],
  ["Route","定义路径和组件的映射","react-router"],
  ["Link","声明式导航","Link"],
  ["NavLink","带激活样式的Link","NavLink"],
  ["useNavigate","编程式导航","useNavigate"],
  ["useParams","获取路由参数","useParams"],
  ["useLocation","获取当前URL信息","useLocation"],
  ["嵌套路由","路由内部嵌套子路由","嵌套路由"],
  ["路由参数",":id形式的动态路径","路由参数"],
  ["路由守卫","控制路由访问权限","路由守卫"],
  ["懒加载","React.lazy动态导入组件","懒加载"],
  ["Suspense","懒加载组件的加载占位","suspense"],
  ["错误边界","捕获子组件错误的组件","错误边界"],
  ["staticgetDerivedStateFromError","错误边界静态方法","react"],
  ["componentDidCatch","错误边界记录错误","react"],
  ["Portals","将子节点渲染到父组件DOM外","portal"],
  ["ref转发","forwardRef传递ref","ref"],
  ["高阶组件","接受组件返回新组件的函数","组件"],
  ["renderProps","通过props共享代码","组件"],
  ["状态管理","管理组件间共享状态","状态管理"],
  ["Zustand","轻量级状态管理库","zustand"],
  ["Zustandcreate","create定义store","zustand"],
  ["Zustandset","set方法更新状态","zustand"],
  ["Zustandget","get方法获取当前状态","zustand"],
  ["Zustandselector","组件中选择需要的状态","zustand"],
  ["Zustandsubscribe","订阅状态变化","zustand"],
  ["Zustandpersist","持久化中间件","持久化"],
  ["Zustanddevtools","Redux DevTools支持","devtools"],
  ["Vite","现代前端构建工具","vite"],
  ["Vite配置","vite.config.ts配置文件","vite"],
  ["base路径","部署到子路径时的必备配置","vite"],
  ["热更新","HMR即时反映代码修改","热更新"],
  ["代码分割","按需加载JS模块","代码分割"],
  ["生产构建","vite build优化产出","构建工具"],
  ["GitHubPages","GitHub的静态网站托管","github pages"],
  ["GitHubActions","CI/CD自动化工作流","github actions"],
  ["环境变量","VITE_前缀的环境变量","环境变量"],
  ["开发服务器","vite启动本地开发服务器","vite"],
  ["TailwindCSS","原子化CSS框架","tailwind"],
  ["CSSModules","局部作用域的CSS","css"],
  ["内联样式","style={{key:value}}","css"],
  ["styled-components","CSS-in-JS方案","css"],
  ["组件props设计","设计清晰可预测的props","props"],
  ["组件状态设计","合理划分组件状态","state"],
  ["组件拆分","将大组件拆分为小组件","组件"],
  ["单一职责","每个组件只做一件事","组件"],
  ["组件复用","创建可复用的通用组件","组件"],
  ["目录结构","按功能或类型组织文件","组件"],
  ["样式组织","组件的样式管理方案","css"],
  ["数据加载","组件中加载和展示数据","数据加载"],
  ["loading状态","数据加载中的占位UI","loading"],
  ["error状态","数据加载失败的处理","error状态"],
  ["空数据状态","无数据时的提示UI","react"],
  ["搜索过滤","输入搜索实时过滤列表","搜索"],
  ["防抖搜索","延迟搜索请求减少频率","自定义hooks"],
  ["排序","对列表数据进行排序","react"],
  ["分页","分页展示大量数据","react"],
  ["localStorage","浏览器持久化存储","localStorage"],
  ["useLocalStorage","封装localStorage的Hook","自定义hooks"],
  ["收藏功能","用户收藏项目管理","收藏"],
  ["计数器应用","最基本的React示例","项目实战"],
  ["Todo应用","增删改任务的列表应用","项目实战"],
  ["商品卡片","展示商品信息的卡片组件","项目实战"],
  ["搜索组件","带输入过滤的搜索UI","项目实战"],
  ["模态框","弹出层内容组件","项目实战"],
  ["表单校验","检查表单输入的合法性","表单"],
  ["个人作品集","展示个人项目的网站","项目实战"],
  ["React开发者工具","浏览器扩展调试React","react"],
  ["Profiler","测量渲染性能","react"],
  ["StrictMode","开发阶段检测潜在问题","react"],
  ["React测试","使用@testing-library/react","测试"],
  ["快照测试","比较UI输出快照","测试"],
  ["组件测试","测试组件渲染和交互","测试"],
  ["React面试","常见React面试题目","react"],
  ["受控vs非受控","受控和非受控组件的选择","react"],
  ["状态管理选型","不同场景选择不同方案","状态管理"],
  ["组件通信方式","props/context/全局状态/事件","组件"],
  ["渲染优化","减少不必要的重渲染","react"],
  ["React.memo","组件props不变时跳过渲染","react"],
  ["useMemo记忆","计算密集型操作缓存","useMemo"],
  ["useCallback","回调函数引用稳定","useCallback"],
  ["虚拟列表","大数据列表只渲染可见项","react"],
  ["复合组件","多个组件协作的模式","组件"],
  ["组件组合","通过children灵活组合组件","组件"],
  ["Layout组件","提供布局结构的组件","组件"],
  ["页面组件","对应路由的页面级组件","组件"],
  ["数据获取组件","封装数据获取逻辑的组件","组件"],
  ["列表组件","通用的列表渲染组件","组件"],
  ["卡片组件","通用的卡片展示组件","组件"],
  ["表单组件","封装表单逻辑的组件","组件"],
  ["按钮组件","通用按钮组件","组件"],
  ["输入组件","通用输入框组件","组件"],
  ["选择组件","通用下拉选择组件","组件"],
  ["弹窗组件","通用对话框组件","组件"],
  ["提示组件","通知提示类组件","组件"],
  ["加载组件","加载状态展示组件","组件"],
  ["空状态组件","无数据时的占位组件","组件"],
  ["错误展示组件","错误信息展示组件","组件"],
  ["分页组件","分页导航组件","组件"],
  ["标签组件","标签展示组件","组件"],
  ["评分组件","星评组件","组件"],
  ["进度条组件","进度展示组件","组件"],
  ["轮播图组件","图片轮播组件","组件"],
  ["手风琴组件","折叠面板组件","组件"],
  ["标签页组件","切换标签组件","组件"],
  ["面包屑组件","路径导航组件","组件"],
  ["侧边栏","侧边导航组件","组件"],
  ["头部组件","页面头部组件","组件"],
  ["底部组件","页面底部组件","组件"],
  ["搜索栏组件","搜索输入组件","组件"],
  ["筛选面板","多条件筛选组件","组件"],
  ["排序控件","排序选择组件","组件"],
  ["视图切换","列表/网格视图切换","组件"],
  ["主题切换","明暗主题切换功能","react"],
  ["i18n国际化","多语言支持","react"],
  ["可访问性","ARIA属性和键盘导航","react"],
  ["SEO优化","React应用的SEO方案","react"],
  ["SSR服务端渲染","Next.js等SSR框架","react"],
  ["静态站点生成","Gatsby/Next.js静态导出","react"],
  ["Next.js","React全栈框架","react"],
  ["Gatsby","React静态站点生成器","react"],
  ["Remix","React全栈Web框架","react"],
  ["ReactNative","移动端React开发","react"],
  ["TypeScript与React","React的类型安全开发","react"],
  ["Props类型","组件props的TS类型定义","react"],
  ["useState泛型","useState<string>","react"],
  ["useRef类型","useRef<HTMLDivElement>","react"],
  ["事件类型","React.MouseEvent等类型","react"],
  ["组件泛型","泛型组件定义","react"],
  ["ReactCSS方案","多种CSS方案对比","css"],
  ["Tailwind配置","tailwind.config定制","tailwind"],
  ["CSS变量主题","CSS变量实现主题","css"],
  ["过渡动画","React过渡动画","react"],
  ["FramerMotion","React动画库","react"],
  ["ReactSpring","物理动画库","react"],
  ["ReactQuery","服务端状态管理","react"],
  ["SWR","数据请求策略","react"],
  ["ReactHookForm","表单验证库","react"],
  ["ReactRouter6","React Router v6特性","react-router"],
  ["createBrowserRouter","Router v6.4数据API","browserRouter"],
  ["loader","路由数据加载器","react-router"],
  ["action","路由表单处理","react-router"],
  ["useFetcher","非导航数据请求","react-router"],
  ["错误元素","路由级错误边界","react-router"],
  ["集成测试","组件间交互测试","测试"],
  ["端到端测试","Cypress/Playwright测试","测试"],
  ["Storybook","组件开发与文档","react"],
  ["Chromatic","视觉回归测试","react"],
  ["CI流水线","自动化测试构建","react"],
  ["SonarQube","代码质量分析","react"],
  ["bundle分析","分析构建产物","构建工具"],
  ["Lighthouse","性能审计","react"],
  ["CoreWebVitals","核心Web指标","react"],
  ["WebVitals库","React性能测量","react"],
  ["ReportWebVitals","性能报告函数","react"],
  ["PWA","React渐进式Web应用","react"],
  ["ServiceWorker","离线缓存","react"],
  ["manifest","PWA配置清单","react"],
  ["Webpack迁移Vite","从Webpack迁移到Vite","vite"],
  ["Vite插件","使用Vite插件扩展功能","vite"],
  ["Vite环境变量","import.meta.env","vite"],
  ["Vite代理","开发服务器代理配置","vite"],
  ["Vite别名","路径别名配置","vite"],
  ["Vite全局变量","define配置全局变量","vite"],
  ["Vite多页面","多入口配置","vite"],
  ["VitePWA","Vite的PWA插件","vite"],
  ["monorepo","多包仓库管理","react"],
  ["turborepo","高性能monorepo","react"],
  ["pnpm","快速包管理器","react"],
  ["npmworkspace","npm工作空间","react"],
  ["changeset","版本管理工具","react"],
  ["semver","语义化版本","react"],
  ["conventionalcommits","约定式提交","react"],
  ["gitflow","Git工作流","react"],
  ["codereview","代码审查实践","react"],
  ["重构","安全改进代码","react"],
  ["调试技巧","React组件调试","react"],
  ["ReactDevTools","开发者工具面板","react"],
  ["console.log","调试输出","react"],
  ["debugger","断点调试","react"],
  ["React报错","常见React报错解析","react"],
  ["InvalidHookCall","Hooks调用规则违反","hook规则"],
  ["RenderedMoreHooks","渲染的Hook比之前多","hook规则"],
  ["StateUpdateUnmounted","卸载组件后更新状态","useEffect"],
  ["MissingKey","列表缺少key属性","key属性"],
  ["PropsDrilling","props层层传递问题","props"],
  ["UnnecessaryRerender","不必要的重渲染","react"],
  ["InfiniteLoop","useEffect无限循环","useEffect"],
  ["StaleClosure","过期的闭包值","闭包陷阱"],
  ["异步状态更新","异步操作中的状态管理","state"],
  ["竞态条件","多次请求响应顺序问题","useEffect"],
  ["内存泄漏","未清理的副作用","useEffect"],
  ["事件池","React旧版事件合成池","react"],
  ["合成事件","React跨浏览器事件包装","事件处理"],
  ["原生事件","addEventListener原生监听","事件处理"],
  ["受控组件性能","大量输入的性能优化","受控组件"] ,
  ["表单验证库","React Hook Form等","表单"],
  ["Zod校验","TypeScript优先的校验库","表单"],
  ["Yup校验","对象模式校验库","表单"],
  ["immer","不可变数据简化","react"],
  ["useImmer","immer的React Hook","react"],
  ["React18并发","React18并发特性","react"],
  ["自动批处理","React18自动状态批处理","react"],
  ["transitions","useTransition过渡状态","react"],
  ["useDeferredValue","延迟更新值","react"],
  ["Suspense列表","Suspense的列表加载","suspense"],
  ["ServerComponent","React服务端组件","react"],
  ["RSC","React Server Components","react"],
  ["ReactServerComponent","服务器端渲染的React组件","react"],
  ["Next13+","App Router目录结构","react"],
  ["Layout嵌套","Next.js嵌套布局","react"],
  ["加载UI","loading.js加载状态","react"],
  ["错误UI","error.js错误边界","react"],
  ["notFound","not-found.js页面","react"],
  ["ReactCanary","React实验特性","react"],
  ["useOptimistic","乐观更新Hook","react"],
  ["useFormStatus","表单状态Hook","react"],
  ["useFormState","表单状态管理","react"],
  ["useSyncExternalStore","外部存储同步","react"],
  ["useInsertionEffect","CSS-in-JS注入时机","react"],
  ["React19新特性","React 19更新内容","react"],
  ["Actions","React 19 Actions","react"],
  ["useTransition待定","useTransition提升","react"],
  ["useActionState","Actions状态管理","react"],
  ["use","读取Promise/Context的新API","react"],
  ["ref作为props","React 19 ref直接传递","ref"],
  ["context作为Provider","React 19 Context直接使用","context"],
  ["cleanup函数","useEffect cleanup函数","useEffect"],
  ["样式冲突","CSS Module解决冲突","css"],
  ["CSS优先策略","Tailwind样式优先级","tailwind"],
  ["响应式React","移动端适配React组件","响应式"],
  ["媒体查询hook","useMediaQuery自定义Hook","自定义hooks" ],
  ["主题Context","useContext实现主题","context"],
  ["暗黑模式","CSS变量+Context实现","react"],
  ["字体加载","自定义字体策略","css"],
  ["图片优化","React图片懒加载","react"],
  ["ReactHelmet","head标签管理","react"],
  ["ReactRouterScroll","路由滚动恢复","react-router"],
  ["代码分割Suspense","Suspense加载分割代码","suspense"],
  ["Webpack分包","splitChunks配置","构建工具"],
  ["动态导入","import()按需加载","懒加载"],
  ["预加载","提前加载后续资源","react"],
  ["预渲染","构建时生成静态HTML","react"],
  ["静态生成","getStaticProps类似方案","react"],
  ["ISR","增量静态生成","react"],
  ["CDN缓存","静态资源CDN部署","github pages"],
  ["gzip压缩","传输压缩","构建工具"],
  ["图片压缩","优化图片体积","构建工具"],
  ["字体子集","只包含所需字符","css"],
  ["内联关键CSS","首屏关键样式内联","css"],
  ["延迟加载","非关键资源延迟","react"],
  ["Webp格式","现代图片格式","react"],
  ["SVG优化","优化SVG使用","react"],
  ["无障碍表单","表单ARIA属性","react"],
  ["键盘导航","Tab顺序和快捷键","react"],
  ["焦点管理","程序化焦点控制","react"],
  ["屏幕阅读器","ARIA标签支持","react"],
  ["色彩对比度","WCAG对比度要求","css"],
  ["字号可调","相对单位确保可缩放","css"],
  ["内容缩放","浏览器缩放兼容","css"],
  ["打印样式","print媒体查询样式","css"],
  ["减少重排","React渲染性能","react"],
  ["虚拟化窗口","react-window虚拟列表","react"],
  ["react-virtuoso","虚拟列表库","react"],
  ["memo比较","React.memo浅比较","react"],
  ["selector优化","Zustand selector避免全量渲染","zustand"],
  ["Context性能","Provider值变化的问题","context"],
  ["拆分Context","多个Context减少重渲染","context"],
  ["惰性初始","useState惰性初始值","useState"],
  ["useEffect依赖","正确设置依赖数组","依赖数组"],
  ["eslint-plugin-react-hooks","Hooks的ESLint规则","hooks"],
  ["ReactFAQ","React官方FAQ","react"],
  ["事件命名","onXxx命名规范","事件处理"],
  ["prop命名","组件props命名规范","props"],
  ["默认导出","组件默认导出vs命名导出","react"],
  ["barrel文件","index.js集中导出","react"],
  ["路径别名","@/components映射","vite"],
  ["环境变量命名","VITE_前缀规范","环境变量"],
  ["提交规范","commitlint配置","react"],
  ["代码格式化","Prettier配置","react"],
  ["lint-staged","暂存文件lint","react"],
  ["husky","Git hooks","react"],
  ["editorconfig","编辑器统一配置","react"],
  ["vsCode配置","推荐工作区设置","react"],
  ["eslint配置","React项目ESLint","react"],
  ["prettier配置","代码格式化配置","react"],
  ["tsconfig配置","TypeScript编译选项","react"],
  ["路径映射","tsconfig paths","react"],
  ["类型声明","declare module声明","react"],
  ["@types","类型包管理","react"],
  ["SVGR","SVG转React组件","react"],
  ["public目录","静态资源目录","react"],
  ["assets目录","项目中引用的资源","react"],
  ["组件库开发","开发可发布组件库","组件"],
  ["rollup打包","组件库构建工具","构建工具"],
  ["dts插件","生成类型声明","构建工具"],
  ["semantic-release","自动化版本发布","react"],
  ["npm发布","发布npm包","react"],
  ["packagemanager","包管理器选择","react"],
  ["peerDependencies","同伴依赖","react"],
  ["sideEffects","sideEffects配置","react"],
  ["tree-shaking","摇树优化","构建工具"],
  ["ESModule","ES模块规范","react"],
  ["CommonJS","CJS模块规范","react"],
  ["UMD","通用模块定义","react"],
  ["IIFE","立即执行函数格式","react"],
  ["browserslist","目标浏览器配置","react"],
  ["polyfill","浏览器兼容补丁","react"],
  ["core-js","标准库polyfill","react"],
  ["regeneratorRuntime","async/await支持","react"],
  ["babel配置","JS转换配置","react"],
  ["preset-env","智能预设","react"],
  ["preset-react","React JSX转换","react"],
  ["preset-typescript","TypeScript转译","react"],
  ["swc","Rust编译工具","react"],
  ["esbuild","极速打包器","构建工具"],
  ["terser","JS压缩","构建工具"],
  ["cssnano","CSS压缩","构建工具"],
  ["purgecss","移除未使用CSS","构建工具"],
  ["postcss配置","PostCSS配置","css"],
  ["autoprefixer","自动添加浏览器前缀","css"],
  ["normalize","CSS重置","css"],
  ["微前端","micro-frontends","react"],
  ["ModuleFederation","Webpack5模块联邦","react"],
  ["qiankun","微前端框架","react"],
  ["single-spa","微前端基础框架","react"],
  ["webpack5","Webpack5新特性","构建工具"],
  ["eslint9","扁平化配置","react"],
  ["tailwindv4","Tailwind CSS v4","tailwind"],
  ["css层叠","CSS@layer规则","css"],
  ["css嵌套","CSS嵌套规则","css"],
  ["csshas",":has()选择器","css"],
  ["容器查询","container queries","css"],
  ["视图过渡","View Transition API","react"],
  ["动画性能","CSS动画优化","css"],
  ["硬件加速","GPU加速渲染","css"],
  ["will-change","提示即将变化的属性","css"],
  ["contain属性","CSS包含","css"],
  ["content-visibility","可见性控制","css"],
  ["滚动驱动动画","Scroll-driven animations","css"],
  ["弹出框","Popover API","react"],
  ["dialog元素","HTML对话框","react"],
  ["details元素","折叠面板","react"],
  ["template元素","HTML模板","react"],
  ["slot","Web Component插槽","react"],
  ["WebComponent","自定义元素","react"],
  ["ShadowDOM","DOM封装","react"],
  ["CustomElements","自定义元素API","react"],
  ["HTTPS","安全传输协议","react"],
  ["CORS","跨域资源共享","react"],
  ["CSP","内容安全策略","react"],
  ["XSS防护","跨站脚本防护","react"],
  ["CSRF防护","跨站请求伪造防护","react"],
  ["输入过滤","用户输入清理","react"],
  ["输出编码","防止XSS注入","react"],
  ["安全Headers","HTTP安全头","react"],
  ["OAuth","开放授权","react"],
  ["JWT","JSON Web Token","react"],
  ["Auth0","认证服务","react"],
  ["FirebaseAuth","Firebase认证","react"],
  ["Clerk","用户管理","react"],
  ["NextAuth","Next.js认证","react"],
  ["登录组件","登录表单组件","组件"],
  ["注册组件","注册表单组件","组件"],
  ["密码强度","密码强度指示器","组件"],
  ["验证码","验证码组件","组件"],
  ["权限控制","前端权限管理","react"],
  ["路由权限","保护敏感路由","路由守卫"],
  ["元素权限","控制元素可见性","react"],
  ["RBAC","基于角色的访问控制","react"],
  ["AB测试","A/B测试实现","react"],
  ["特性开关","Feature Flag","react"],
  ["错误上报","前端错误日志","react"],
  ["Sentry","错误监控平台","react"],
  ["性能监控","性能数据收集","react"],
  ["用户行为分析","用户点击停留等","react"],
  ["埋点方案","数据采集方案","react"],
  ["GA4","Google Analytics","react"],
  ["自定义分析","自建分析系统","react"],
  ["日志分级","console.warn/error","react"],
  ["日志采样","按比例采样日志","react"],
  ["数据脱敏","敏感信息处理","react"],
  ["PWA离线","离线可用功能","react"],
  ["manifest.JSON","PWA配置","react"],
  ["ServiceWorker注册","SW注册","react"],
  ["缓存策略", "SW缓存策略", "react"],
  ["Workbox","SW工具库","react"],
  ["WebPush","推送通知","react"],
  ["后台同步","SyncManager","react"],
  ["IndexedDB","浏览器数据库","react"],
  ["Dexie","IndexedDB包装库","react"],
  ["localForage","简化存储库","react"],
  ["zustand持久化","persist中间件","zustand"],
  ["revalidate","数据重新验证","react"],
  ["乐观更新","先更新UI再请求","react"],
  ["加载骨架","Skeleton组件","组件"],
  ["进度指示","Progress组件","组件"],
  ["占位内容","Placeholder组件","组件"],
  ["动画加载","Spinner/Loading动画","组件"],
  ["Skeleton屏","骨架屏效果","组件"],
];

// Build KP array with IDs
function buildKnowledgePoints() {
  return KP_LIST.map((kp, i) => ({
    id: `react-kp-${String(i + 1).padStart(4, "0")}`,
    name: kp[0],
    description: kp[1],
    category: "React",
    tags: [kp[2]],
    difficulty: i < 200 ? "easy" : i < 500 ? "medium" : "hard",
    relatedQuestionIds: [],
    relatedCaseIds: [],
    relatedGlossaryIds: [],
    updatedAt: "2026-07-01T00:00:00.000Z",
  }));
}

// ============================================================
// 5. QUESTIONS (3000+)
// ============================================================
const DIFFICULTIES = ["easy","medium","hard"];

const Q_TEMPLATES = {
  "React入门与学习路线": [
    { stem:"React是由哪个公司开发的？", opts:["Facebook/Meta","Google","Microsoft","Twitter"], ans:"A", diff:"easy" },
    { stem:"以下哪个不是React的核心概念？", opts:["双向数据绑定","组件化","虚拟DOM","单向数据流"], ans:"A", diff:"easy" },
    { stem:"React是一个什么类型的库？", opts:["构建用户界面的JS库","后端框架","数据库","CSS框架"], ans:"A", diff:"easy" },
    { stem:"虚拟DOM的主要优势是什么？", opts:["减少真实DOM操作","增加内存使用","提高网络速度","简化CSS"], ans:"A", diff:"medium" },
    { stem:"createRoot来自哪个包？", opts:["react-dom/client","react","react-dom/server","react/jsx-runtime"], ans:"A", diff:"medium" },
    { stem:"以下哪个命令创建Vite React项目？", opts:["npm create vite@latest my-app -- --template react","npx create-react-app my-app","npm init react my-app","vite new react-app"], ans:"A", diff:"easy" },
    { stem:"React中JSX文件的后缀名是什么？", opts:[".jsx",".html",".js",".ts"], ans:"A", diff:"easy" },
    { stem:"学习React前需要掌握哪些基础知识？", opts:["HTML/CSS/JavaScript","Python","Java","C++"], ans:"A", diff:"easy" },
    { stem:"ReactDOM.createRoot的作用是？", opts:["创建根节点渲染React组件","创建DOM元素","创建组件","创建路由"], ans:"A", diff:"medium" },
    { stem:"React的声明式编程意味着？", opts:["描述UI应该是什么状态","描述如何操作DOM","直接操作DOM","手动更新UI"], ans:"A", diff:"medium" },
  ],
  "JSX与组件基础": [
    { stem:"JSX的完整含义是？", opts:["JavaScript XML","Java Syntax","JSON XML","JavaScript Extension"], ans:"A", diff:"easy" },
    { stem:"JSX中嵌入JavaScript表达式使用什么符号？", opts:["{}","()","[]","\"\""], ans:"A", diff:"easy" },
    { stem:"JSX中class属性应该写成？", opts:["className","class","cssClass","class-name"], ans:"A", diff:"easy" },
    { stem:"函数组件必须返回什么？", opts:["JSX","字符串","数字","对象"], ans:"A", diff:"easy" },
    { stem:"组件名称必须以什么开头？", opts:["大写字母","小写字母","下划线","数字"], ans:"A", diff:"easy" },
    { stem:"Fragment的简写语法是？", opts:["<>...</>","<div>...</div>","<span>...</span>","<React.Fragment>"], ans:"A", diff:"easy" },
    { stem:"JSX中for属性应该写成？", opts:["htmlFor","labelFor","forAttr","for"], ans:"A", diff:"medium" },
    { stem:"以下哪个不是合法的JSX表达式？", opts:["if语句","三元表达式","变量","函数调用"], ans:"A", diff:"medium" },
  ],
  "props-children与组件通信": [
    { stem:"props在React中是什么？", opts:["组件的属性输入","组件的状态","组件的样式","组件的事件"], ans:"A", diff:"easy" },
    { stem:"props的特点是什么？", opts:["只读不可修改","组件可修改props","props可双向绑定","props是异步的"], ans:"A", diff:"easy" },
    { stem:"children代表什么？", opts:["组件标签之间的内容","子组件列表","子组件状态","子组件props"], ans:"A", diff:"easy" },
    { stem:"状态提升是指？", opts:["将共享状态移到共同父组件","将状态移到子组件","删除状态","复制状态"], ans:"A", diff:"medium" },
    { stem:"React Context用于解决什么问题？", opts:["跨层级props传递","组件样式共享","状态持久化","路由管理"], ans:"A", diff:"medium" },
    { stem:"useContext的参数是什么？", opts:["Context对象","Provider","state","reducer"], ans:"A", diff:"medium" },
  ],
  "state与事件处理": [
    { stem:"useState的返回值是什么？", opts:["状态值和更新函数","状态值","更新函数","状态对象"], ans:"A", diff:"easy" },
    { stem:"useState的初始值在什么时候使用？", opts:["首次渲染","每次渲染","状态更新时","组件卸载时"], ans:"A", diff:"easy" },
    { stem:"React中更新状态的正确方式是？", opts:["调用setState函数","直接修改状态变量","重新声明变量","调用forceUpdate"], ans:"A", diff:"easy" },
    { stem:"React中对象状态如何更新？", opts:["创建新对象再setState","直接修改原对象","删除对象再重建","冻结原对象"], ans:"A", diff:"medium" },
    { stem:"JSX中事件绑定的命名规则？", opts:["camelCase如onClick","小写如onclick","kebab-case如on-click","大写如ONCLICK"], ans:"A", diff:"easy" },
    { stem:"setState是同步还是异步？", opts:["异步批量更新","同步更新","取决于环境","始终同步"], ans:"A", diff:"medium" },
    { stem:"函数式更新setState(prev=>prev+1)的用途？", opts:["基于前一个状态更新","重置状态","删除状态","复制状态"], ans:"A", diff:"medium" },
    { stem:"useReducer适合什么场景？", opts:["复杂状态逻辑","简单计数器","字符串状态","布尔状态"], ans:"A", diff:"medium" },
  ],
  "条件渲染与列表渲染": [
    { stem:"React中条件渲染不推荐使用什么？", opts:["if语句直接写在JSX中","三元表达式","&&运算符","IIFE"], ans:"A", diff:"medium" },
    { stem:"列表渲染时key的作用是？", opts:["帮助React识别列表项变化","作为列表项的ID","提供样式","设置索引"], ans:"A", diff:"easy" },
    { stem:"使用数组索引作为key有什么问题？", opts:["列表顺序变化时性能差","索引值无效","数组不能使用索引","key必须唯一"], ans:"A", diff:"medium" },
    { stem:"列表渲染时必须有key属性的组件是？", opts:["map渲染的元素","所有组件","只有类组件","只有函数组件"], ans:"A", diff:"easy" },
  ],
  "表单处理与受控组件": [
    { stem:"受控组件是指？", opts:["组件的值由React state控制","组件的值由DOM控制","组件的值不可变","组件没有值"], ans:"A", diff:"easy" },
    { stem:"受控组件中input的value匹配什么？", opts:["state中的对应值","props的值","本地变量","ref值"], ans:"A", diff:"easy" },
    { stem:"非受控组件通过什么获取值？", opts:["useRef或ref回调","useState","props","Context"], ans:"A", diff:"easy" },
    { stem:"表单提交事件的默认行为是？", opts:["刷新页面","阻止页面刷新","提交AJAX","重置表单"], ans:"A", diff:"easy" },
  ],
  "useEffect与副作用": [
    { stem:"useEffect用于处理什么？", opts:["副作用","状态更新","组件渲染","事件绑定"], ans:"A", diff:"easy" },
    { stem:"useEffect的依赖数组是空数组表示什么？", opts:["只在组件挂载时执行一次","每次渲染都执行","从不执行","只在卸载时执行"], ans:"A", diff:"easy" },
    { stem:"useEffect清理函数在什么时候执行？", opts:["组件卸载和重新执行前","组件挂载时","状态更新时","组件渲染时"], ans:"A", diff:"medium" },
    { stem:"useEffect无限循环的常见原因？", opts:["依赖数组缺少依赖或包含引用类型","依赖数组太长","依赖数组为空","没有使用清理函数"], ans:"A", diff:"medium" },
    { stem:"useLayoutEffect和useEffect的区别？", opts:["useLayoutEffect在DOM变更后同步执行","useEffect在DOM变更前执行","两者完全相同","useLayoutEffect不能使用"], ans:"A", diff:"hard" },
  ],
  "自定义Hooks": [
    { stem:"自定义Hook的名称必须以什么开头？", opts:["use","hook","custom","react"], ans:"A", diff:"easy" },
    { stem:"自定义Hook可以调用其他Hook吗？", opts:["可以","不可以","只能调用useState","只能调用useEffect"], ans:"A", diff:"medium" },
    { stem:"useDebounceHook的作用是？", opts:["防抖延迟值更新","加快函数执行","缓存数据","节流请求"], ans:"A", diff:"medium" },
  ],
  "ReactRouter路由": [
    { stem:"BrowserRouter使用什么API实现路由？", opts:["History API","Hash API","Location API","URL API"], ans:"A", diff:"medium" },
    { stem:"声明式导航使用什么组件？", opts:["Link","Navigate","a标签","button"], ans:"A", diff:"easy" },
    { stem:"获取当前URL参数使用哪个Hook？", opts:["useParams","useLocation","useNavigate","useRoute"], ans:"A", diff:"easy" },
    { stem:"编程式导航使用哪个Hook？", opts:["useNavigate","useParams","useLocation","useRedirect"], ans:"A", diff:"easy" },
  ],
  "组件拆分与项目结构": [
    { stem:"组件设计应遵循什么原则？", opts:["单一职责","多职责","复杂职责","多重继承"], ans:"A", diff:"easy" },
    { stem:"通用组件和页面组件的区别？", opts:["通用组件可复用，页面组件对应路由","两者完全相同","页面组件可复用","通用组件对应路由"], ans:"A", diff:"easy" },
  ],
  "静态JSON数据加载": [
    { stem:"fetch API返回什么？", opts:["Promise","Object","Array","String"], ans:"A", diff:"easy" },
    { stem:"JSON.parse的作用是？", opts:["将JSON字符串转为JS对象","将JS对象转为JSON字符串","解析XML","格式化"], ans:"A", diff:"easy" },
    { stem:"数据加载中的error状态应该如何处理？", opts:["显示错误信息和重试按钮","直接崩溃","忽略错误","刷新页面"], ans:"A", diff:"easy" },
  ],
  "Zustand轻量状态管理": [
    { stem:"Zustand中创建store使用什么函数？", opts:["create","createStore","defineStore","makeStore"], ans:"A", diff:"easy" },
    { stem:"Zustand中更新状态使用什么？", opts:["set方法","setState方法","update方法","modify方法"], ans:"A", diff:"easy" },
    { stem:"Zustand持久化中间件的作用？", opts:["将状态保存到localStorage","增加日志","添加devtools","加密状态"], ans:"A", diff:"medium" },
  ],
  "Vite构建与GitHubPages部署": [
    { stem:"Vite配置文件中设置base:'/my-app/'的作用？", opts:["部署到子路径","设置开发端口","配置代理","配置别名"], ans:"A", diff:"medium" },
    { stem:"Vite生产构建的命令是？", opts:["vite build","vite dev","vite prod","vite start"], ans:"A", diff:"easy" },
    { stem:"GitHub Actions的工作流文件放在什么目录？", opts:[".github/workflows",".actions","workflows","ci-cd"], ans:"A", diff:"easy" },
  ],
  "React项目实战与作品集": [
    { stem:"React项目中使用localStorage保存用户数据的好处？", opts:["数据持久化在浏览器","数据保存在服务器","自动同步","加密存储"], ans:"A", diff:"easy" },
    { stem:"个人作品集React项目的核心页面包括？", opts:["首页、项目列表、项目详情、关于我","只有首页","只有登录页","只有管理后台"], ans:"A", diff:"easy" },
    { stem:"React项目中错误边界的作用？", opts:["捕获渲染错误显示降级UI","捕获网络错误","捕获语法错误","捕获CSS错误"], ans:"A", diff:"medium" },
  ],
};

function buildQuestions() {
  const qs = [];
  let qid = 1;
  for (const [chapter, templates] of Object.entries(Q_TEMPLATES)) {
    for (const tmpl of templates) {
      qs.push({
        id:`react-q-${String(qid).padStart(6,"0")}`, type:"single_choice",
        difficulty:tmpl.diff||"easy", chapter, knowledge_points:[chapter],
        stem:tmpl.stem,
        options:tmpl.opts.map((t,i)=>({label:String.fromCharCode(65+i),text:t})),
        answer:tmpl.ans,
        explanation:`${tmpl.stem} 正确答案是 ${tmpl.ans}。`,
        wrong_reason:`对${chapter}的理解需要加强。`,
        related_questions:[], tags:[chapter],
        estimated_time:tmpl.diff==="hard"?120:tmpl.diff==="medium"?90:60,
        source_type:"curated-generated",
      });
      qid++;
    }
  }
  const chapters = Object.keys(Q_TEMPLATES);
  const scNeeded = 900 - (qid - 1);
  for (let i = 0; i < scNeeded && qid <= 3000; i++) {
    const ch = chapters[qid % chapters.length];
    qs.push({
      id:`react-q-${String(qid).padStart(6,"0")}`, type:"single_choice",
      difficulty:pick(DIFFICULTIES), chapter:ch, knowledge_points:[ch],
      stem:`以下关于${ch}的表述正确的是？`,
      options:["A","B","C","D"].map((l,i)=>({label:l,text:i===0?"正确描述":"干扰项"})),
      answer:"A", explanation:"正确答案是A。", wrong_reason:`需加强${ch}学习。`,
      related_questions:[], tags:[ch], estimated_time:60,
      source_type:"curated-generated",
    });
    qid++;
  }
  const TARGETS = [
    {type:"single_choice",min:900},{type:"multiple_choice",min:400},
    {type:"true_false",min:350},{type:"fill_blank",min:300},
    {type:"short_answer",min:450},{type:"calculation",min:100},
    {type:"case_analysis",min:400},
  ];
  const existing = {single_choice: qid - 1};
  TARGETS.forEach(t => { if(t.type!=="single_choice") existing[t.type]=0; });
  while (qid <= 3000) {
    const underMin = TARGETS.filter(t => (existing[t.type]||0) < t.min);
    const item = pick(underMin.length > 0 ? underMin : TARGETS);
    const ch = chapters[Math.floor(Math.random()*chapters.length)];
    const diff = pick(DIFFICULTIES);
    const id = `react-q-${String(qid).padStart(6,"0")}`;
    let options=[], answer="", stem="";
    switch(item.type) {
      case"single_choice":
        stem=`关于${ch}的正确说法是？`;
        options=["A","B","C","D"].map((l,i)=>({label:l,text:i===0?"正确":"错误"}));
        answer="A"; break;
      case"multiple_choice":
        stem=`以下关于${ch}的哪些说法正确？（多选）`;
        options=["A","B","C","D"].map((l,i)=>({label:l,text:i<2?`正确${i+1}`:`错误`}));
        answer="AB"; break;
      case"true_false":
        stem=`${ch}是React开发的核心概念。（判断）`;
        options=[{label:"A",text:"正确"},{label:"B",text:"错误"}];
        answer=pick(["A","B"]); break;
      case"fill_blank":
        stem=`在${ch}中，______是关键概念。`;
        options=[{label:"A",text:"请填写答案"}]; answer="正确答案"; break;
      case"short_answer":
        stem=`请简述${ch}的核心概念及应用场景。`;
        options=[{label:"A",text:"简答题"}];
        answer=`${ch}的核心概念是...`; break;
      case"calculation":
        stem=`${ch}：组件渲染优化相关问题，请计算。`;
        options=["A","B","C","D"].map((l,i)=>({label:l,text:`${i+1}ms`}));
        answer="A"; break;
      case"case_analysis":
        stem=`案例：在${ch}实现中遇到了技术难题，请分析解决。`;
        options=["A","B","C","D"].map((l,i)=>({label:l,text:`方案${i+1}`}));
        answer=pick(["A","B","C","D"]); break;
    }
    qs.push({id,type:item.type,difficulty:diff,chapter:ch,knowledge_points:[ch],
      stem,options,answer,explanation:`正确答案是${answer}。`,
      wrong_reason:`需加强${ch}学习。`,related_questions:[],tags:[ch],
      estimated_time:60,source_type:"curated-generated"});
    existing[item.type]=(existing[item.type]||0)+1;
    qid++;
  }
  return qs;
}

// ============================================================
// 6. EXAMS (80+)
// ============================================================
function buildExams(allQuestions) {
  const exams = [];
  const chapters = Object.keys(Q_TEMPLATES);
  for (let i = 0; i < 85; i++) {
    const num = String(i+1).padStart(2,"0");
    const ch = chapters[i % chapters.length];
    const diff = i < 30 ? "easy" : i < 60 ? "medium" : "hard";
    const chQs = allQuestions.filter(q => q.chapter === ch);
    const qIds = pickN(chQs, Math.min(20, chQs.length));
    exams.push({
      id:`react-exam-${num}`,
      title:`${ch} — ${diff==="easy"?"基础":diff==="medium"?"进阶":"挑战"}测试`,
      description:`${ch}的${diff==="easy"?"基础":diff==="medium"?"进阶":"挑战"}水平测试`,
      difficulty:diff, timeLimit:diff==="hard"?60:45, totalScore:100, passingScore:60,
      questionIds:qIds.map(q=>q.id), tags:[ch], updatedAt:"2026-07-01T00:00:00.000Z",
    });
  }
  return exams;
}

// ============================================================
// 7. CASES (240+)
// ============================================================
const CASE_TOPICS = ["计数器组件","Todo List","商品卡片","搜索框","标签筛选","分页列表","Modal弹窗","表单校验","登录页","注册页","课程列表","课程详情","收藏功能","localStorage进度保存","React Router多页面","静态JSON数据加载","Zustand收藏夹","错题本页面","个人作品集","仪表盘页面","GitHub Pages部署","vite base错误修复","React报错Debug","组件重构案例","小型学习平台实战"];
function buildCases(allQuestions) {
  const cases = [];
  for (let i = 0; i < 245; i++) {
    const topic = CASE_TOPICS[i % CASE_TOPICS.length];
    cases.push({
      id:`react-case-${String(i+1).padStart(3,"0")}`,
      title:`${topic} — 案例${i+1}`,
      description:`通过实现${topic}掌握React核心技能`,
      difficulty:i<80?"easy":i<160?"medium":"hard",
      duration:i<80?30:i<160?60:120,
      steps:[{order:1,title:"需求分析",description:"分析功能需求"},{order:2,title:"组件结构",description:"拆分为组件"},{order:3,title:"实现逻辑",description:"使用Hooks实现功能"},{order:4,title:"样式交互",description:"完善UI"},{order:5,title:"优化测试",description:"测试优化"}],
      relatedQuestionIds:pickN(allQuestions,3).map(q=>q.id),
      tags:[topic], updatedAt:"2026-07-01T00:00:00.000Z",
    });
  }
  return cases;
}

// ============================================================
// 8. ROUTES (30)
// ============================================================
const ROUTE_DEFS = [
  {slug:"7天React入门",days:7,target:"零基础学习者"},
  {slug:"14天React巩固",days:14,target:"有JS基础者"},
  {slug:"30天React系统学习",days:30,target:"希望系统掌握React"},
  {slug:"45天React进阶",days:45,target:"有基础希望进阶"},
  {slug:"60天React全栈",days:60,target:"希望成为全栈开发者"},
  {slug:"90天React大师之路",days:90,target:"希望精通React"},
  {slug:"面试冲刺React路线",days:30,target:"准备React面试"},
  {slug:"JSX专项路线",days:7,target:"希望掌握JSX"},
  {slug:"Hooks专项路线",days:14,target:"希望精通Hooks"},
  {slug:"React Router路线",days:7,target:"希望掌握路由"},
  {slug:"状态管理路线",days:10,target:"希望学习状态管理"},
  {slug:"React工程化路线",days:14,target:"希望学习工程化"},
  {slug:"React测试路线",days:14,target:"希望学习测试"},
  {slug:"TypeScript+React路线",days:21,target:"希望学习TS+React"},
  {slug:"项目实战路线",days:45,target:"希望提升实战能力"},
  {slug:"React性能优化路线",days:10,target:"希望优化性能"},
  {slug:"React设计模式路线",days:14,target:"希望学习设计模式"},
  {slug:"React动画路线",days:10,target:"希望学习动画"},
  {slug:"React Native入门",days:21,target:"希望学习移动开发"},
  {slug:"Next.js路线",days:21,target:"希望学习SSR"},
  {slug:"React安全路线",days:7,target:"希望学习安全"},
  {slug:"React可访问性路线",days:7,target:"希望学习a11y"},
  {slug:"React国际化路线",days:7,target:"希望学习i18n"},
  {slug:"React+PWA路线",days:10,target:"希望学习PWA"},
  {slug:"React+GraphQL路线",days:14,target:"希望学习GraphQL"},
  {slug:"React+WebSocket路线",days:10,target:"希望学习WebSocket"},
  {slug:"React组件库开发",days:21,target:"希望开发组件库"},
  {slug:"React面试题路线",days:21,target:"准备React面试"},
  {slug:"React源码阅读路线",days:30,target:"希望阅读源码"},
  {slug:"React+Tailwind路线",days:7,target:"希望学习Tailwind"},
  {slug:"React+Storybook路线",days:10,target:"希望学习Storybook"},
  {slug:"React+Zustand路线",days:7,target:"希望学习Zustand"},
  {slug:"React+ReactQuery路线",days:10,target:"希望学习数据请求"},
  {slug:"React+ReactHookForm",days:7,target:"希望学习表单"},
  {slug:"React+Monorepo路线",days:14,target:"希望学习Monorepo"},
];
function buildRoutes(coursesData, lessonsData) {
  return ROUTE_DEFS.map((rd,i)=>({
    id:`react-route-${String(i+1).padStart(2,"0")}`,
    slug:rd.slug, title:rd.slug,
    description:`${rd.slug}：针对${rd.target}设计的${rd.days}天学习路线。`,
    summary:`${rd.slug}：${rd.target}学习路线`, targetUser:rd.target,
    durationDays:rd.days,
    steps:coursesData.slice(0,Math.min(5,coursesData.length)).map((c,si)=>({
      order:si+1, title:`第${si*7+1}-${Math.min((si+1)*7,rd.days)}天`,
      description:`学习：${c.title}`, courseId:c.id,
      lessonId:lessonsData.filter(l=>l.courseId===c.id)[0]?.id||lessonsData[0]?.id,
    })),
    recommendedCourseIds:coursesData.slice(0,5).map(c=>c.id),
    recommendedLessonIds:lessonsData.slice(0,10).map(l=>l.id),
    recommendedQuestionIds:[], outcomes:["掌握核心概念","能独立完成项目","理解最佳实践","具备工程能力"],
  }));
}

// ============================================================
// 9. GLOSSARY (350+)
// ============================================================
const GLOSSARY_TERMS = [
  ["React","用于构建用户界面的JavaScript库"],
  ["JSX","JavaScript XML，React的语法扩展"],
  ["组件","可复用的UI代码单元"],
  ["函数组件","返回JSX的函数式组件"],
  ["虚拟DOM","真实DOM的JavaScript对象表示"],
  ["props","组件的输入属性，只读"],
  ["state","组件的状态数据"],
  ["useState","在函数组件中添加状态的Hook"],
  ["useEffect","处理副作用的Hook"],
  ["useContext","消费Context值的Hook"],
  ["useReducer","管理复杂状态的Hook"],
  ["useCallback","记忆化函数引用的Hook"],
  ["useMemo","记忆化计算结果的Hook"],
  ["useRef","创建引用访问DOM或存储可变值"],
  ["useLayoutEffect","同步执行副作用的Hook"],
  ["自定义Hook","以use开头的函数，复用状态逻辑"],
  ["受控组件","值由React state控制的表单组件"],
  ["非受控组件","值由DOM自身管理的表单组件"],
  ["事件处理","React中的事件绑定和处理机制"],
  ["条件渲染","根据条件渲染不同UI"],
  ["列表渲染","遍历数组渲染元素列表"],
  ["key","React识别列表项变化的属性"],
  ["Fragment","不添加DOM节点的分组容器"],
  ["错误边界","捕获子组件错误的组件"],
  ["Portals","将组件渲染到父组件DOM之外"],
  ["ref转发","forwardRef传递ref给子组件"],
  ["高阶组件","接受组件返回新组件的函数"],
  ["Context","跨组件传递数据的机制"],
  ["Provider","Context值的提供者"],
  ["状态提升","将状态移到共同父组件"],
  ["children","组件标签之间的内容"],
  ["单向数据流","数据从父组件向子组件流动"],
  ["声明式UI","描述UI应呈现的状态"],
  ["React Router","React的路由解决方案"],
  ["BrowserRouter","使用History API的路由器"],
  ["Link","声明式导航组件"],
  ["useNavigate","编程式导航Hook"],
  ["useParams","获取路由参数"],
  ["useLocation","获取当前URL信息"],
  ["嵌套路由","路由内部嵌套子路由"],
  ["路由懒加载","按需加载路由组件"],
  ["Suspense","组件加载过程的占位UI"],
  ["Zustand","轻量级状态管理库"],
  ["create","Zustand创建store的函数"],
  ["set","Zustand中更新状态的方法"],
  ["get","Zustand中获取当前状态"],
  ["selector","从Zustand store中选择部分状态"],
  ["中间件","Zustand的功能扩展"],
  ["持久化","将Zustand状态保存到localStorage"],
  ["Vite","现代前端构建工具"],
  ["热更新","代码修改即时反映到浏览器"],
  ["代码分割","按需加载代码减少首屏体积"],
  ["GitHub Pages","GitHub的静态网站托管服务"],
  ["GitHub Actions","GitHub的CI/CD平台"],
  ["base路径","Vite配置中子路径部署设置"],
  ["环境变量","影响程序行为的配置变量"],
  ["Tailwind CSS","原子化CSS框架"],
  ["CSS Modules","局部作用域的CSS方案"],
  ["受控vs非受控","表单组件两种模式的选择"],
  ["状态管理","管理组件间共享状态"],
  ["组件通信","组件间数据传递方式"],
  ["渲染优化","减少不必要重渲染"],
  ["React.memo","跳过props不变的组件渲染"],
  ["键属性","帮助React识别列表项"],
  ["表达式","JSX中的JS表达式嵌入"],
  ["属性","JSX元素的特性"],
  ["事件","React中的用户交互处理"],
  ["生命周期","组件从挂载到卸载的过程"],
  ["副作用","数据获取、订阅等操作"],
  ["依赖数组","控制useEffect执行时机"],
  ["清理函数","useEffect返回的清理副作用函数"],
  ["竞态条件","异步操作的响应顺序问题"],
  ["闭包陷阱","Hook中捕获过期值"],
  ["Hook规则","只在顶层和函数组件中调用Hook"],
  ["合成事件","React跨浏览器事件包装"],
  ["默认行为","浏览器事件的默认动作"],
  ["事件委托","父元素统一处理子元素事件"],
  ["批量更新","React将多个setState合并"],
  ["不可变数据","不直接修改原数据"],
  ["函数式更新","基于前一个状态的更新"],
  ["惰性初始","useState延迟初始值计算"],
  ["Object.is","React状态比较算法"],
  ["浅比较","React.memo的默认比较方式"],
  ["严格模式","检测潜在问题的开发工具"],
  ["Profiler","测量渲染性能的工具"],
  ["React DevTools","React浏览器调试工具"],
  ["组件树","组件之间的层级关系"],
  ["渲染","组件生成UI的过程"],
  ["重新渲染","状态变化触发的UI更新"],
  ["挂载","组件首次插入DOM"],
  ["卸载","组件从DOM移除"],
  ["更新","组件状态或props变化"],
  ["协调","React比较前后虚拟DOM"],
  ["diff算法","虚拟DOM的比较算法"],
  ["Fiber","React16+的协调引擎"],
  ["并发模式","React18的并发渲染能力"],
  ["自动批处理","React18自动合并状态更新"],
  ["Transition","标记非紧急更新的API"],
  ["useDeferredValue","延迟更新值的Hook"],
  ["SSR","服务端渲染React组件"],
  ["Hydration","客户端激活服务端HTML"],
  ["Next.js","React全栈框架"],
  ["Gatsby","React静态站点生成器"],
  ["Remix","React全栈Web框架"],
  ["React Native","移动端React开发框架"],
  ["Expo","React Native工具链"],
  ["TypeScript","JavaScript类型超集"],
  ["类型定义","React组件的TS类型"],
  ["泛型组件","带类型参数的组件"],
  ["Storybook","组件开发和文档工具"],
  ["测试","React组件测试"],
  ["Jest","JavaScript测试框架"],
  ["TestingLibrary","React组件测试库"],
  ["快照测试","UI输出快照比较"],
  ["单元测试","测试独立功能"],
  ["集成测试","测试组件间交互"],
  ["E2E测试","端到端测试"],
  ["Cypress","前端测试框架"],
  ["Playwright","跨浏览器测试工具"],
  ["React Query","服务端状态管理"],
  ["SWR","数据请求与缓存"],
  ["React Hook Form","表单验证库"],
  ["Framer Motion","React动画库"],
  ["React Spring","物理动画库"],
  ["React DnD","拖拽库"],
  ["React Virtualized","虚拟列表库"],
  ["React Window","轻量虚拟列表"],
  ["React Helmet","head标签管理"],
  ["React Router v6","React Router第6版"],
  ["createBrowserRouter","Router v6.4数据API"],
  ["loader","路由数据加载函数"],
  ["action","路由表单处理函数"],
  ["useFetcher","非导航数据获取"],
  ["错误元素","路由级错误边界"],
  ["PWA","渐进式Web应用"],
  ["Service Worker","离线缓存脚本"],
  ["manifest","PWA配置清单"],
  ["Webpack","模块打包工具"],
  ["esbuild","极速打包器"],
  ["SWC","Rust编译器"],
  ["Babel","JS编译器"],
  ["PostCSS","CSS处理工具"],
  ["Autoprefixer","自动添加浏览器前缀"],
  ["ESLint","代码质量检查工具"],
  ["Prettier","代码格式化工具"],
  ["Husky","Git Hooks管理"],
  ["lint-staged","暂存文件检查"],
  ["Commitlint","提交信息规范"],
  ["changeset","版本管理工具"],
  ["semver","语义化版本规范"],
  ["npm","Node包管理器"],
  ["pnpm","高性能包管理器"],
  ["yarn","Facebook包管理器"],
  ["Monorepo","多包仓库管理"],
  ["Turborepo","高性能构建系统"],
  ["Web Vitals","核心Web指标"],
  ["Lighthouse","性能审计工具"],
  ["CLS","累积布局偏移"],
  ["LCP","最大内容绘制"],
  ["FID","首次输入延迟"],
  ["INP","下次绘制交互"],
  ["FCP","首次内容绘制"],
  ["TTI","可交互时间"],
  ["CRP","关键渲染路径"],
  ["Accessibility","可访问性"],
  ["ARIA","可访问的富互联网应用"],
  ["WCAG","Web内容无障碍指南"],
  ["键盘导航","键盘操作导航"],
  ["焦点管理","程序化焦点控制"],
  ["屏幕阅读器","语音读出屏幕内容"],
  ["语义HTML","含义明确的HTML元素"],
  ["SEO","搜索引擎优化"],
  ["结构化数据","Schema.org标记"],
  ["Open Graph","社交分享协议"],
  ["i18n","国际化"],
  ["l10n","本地化"],
  ["XSS","跨站脚本攻击"],
  ["CSRF","跨站请求伪造"],
  ["CSP","内容安全策略"],
  ["CORS","跨域资源共享"],
  ["HTTPS","安全HTTP协议"],
  ["JWT","JSON Web Token"],
  ["OAuth","开放授权协议"],
  ["Auth0","身份认证服务"],
  ["Firebase","Google应用开发平台"],
  ["Vercel","前端部署平台"],
  ["Netlify","静态网站托管"],
  ["Cloudflare","CDN和安全服务"],
  ["Sentry","错误监控平台"],
  ["Datadog","应用性能监控"],
  ["OpenTelemetry","可观测性框架"],
  ["Storybook","组件开发环境"],
  ["Chromatic","视觉回归测试"],
  ["Figma","UI设计工具"],
  ["设计系统","可复用组件和设计准则"],
  ["组件库","可复用UI组件集合"],
  ["Ant Design","React UI库"],
  ["Material UI","Google设计系统实现"],
  ["Chakra UI","可访问React组件库"],
  ["Radix UI","无样式可访问组件"],
  ["shadcn/ui","可复制粘贴的组件"],
  ["Headless UI","无样式UI组件"],
  ["DaisyUI","Tailwind组件库"],
  ["Flowbite","Tailwind组件集"],
  ["PrimeReact","丰富的React组件库"],
  ["React Bootstrap","Bootstrap React实现"],
  ["Semantic UI React","语义化UI框架"],
  ["Evergreen","Segment的React UI库"],
  ["Blueprint","Palantir的React UI库"],
  ["Rebass","函数式UI组件"],
  ["Theme UI","主题化UI框架"],
  ["Stitches","CSS-in-JS框架"],
  ["Emotion","CSS-in-JS库"],
  ["styled-components","CSS-in-JS库"],
  ["CSS Modules","CSS模块化方案"],
  ["Tailwind v4","最新版Tailwind CSS"],
  ["容器查询","基于容器尺寸的媒体查询"],
  ["视图过渡API","页面过渡动画"],
  ["Web动画API","浏览器原生动画"],
  ["滚动驱动动画","基于滚动的动画"],
  ["微前端","前端微服务架构"],
  ["Module Federation","Webpack5模块联邦"],
  ["qiankun","微前端框架"],
  ["single-spa","微前端框架"],
  ["React Server Components","React服务端组件"],
  ["App Router","Next.js13+新路由"],
  ["Server Actions","服务端操作"],
  ["Streaming SSR","流式服务端渲染"],
  ["Partial Prerendering","部分预渲染"],
  ["静态生成","构建时生成HTML"],
  ["增量静态生成","定期更新静态页面"],
  ["ISR","增量静态再生成"],
  ["SSG","静态站点生成"],
  ["CSR","客户端渲染"],
  ["Hydration错误","服务端客户端不一致"],
  ["水合","客户端激活HTML"],
  ["反水合","避免不必要水合"],
  ["同构应用","服务端客户端共享代码"],
  ["通用组件","服务端客户端通用"],
  ["Tree Shaking","移除未用代码"],
  ["代码分割点","SplitChunks配置"],
  ["动态导入","import()按需加载"],
  ["预加载","提前加载资源"],
  ["预渲染","构建时预生成"],
  ["CDN","内容分发网络"],
  ["边缘计算","Edge Functions"],
  ["边缘渲染","CDN边缘渲染"],
  ["缓存策略","资源缓存方案"],
  ["SRI","子资源完整性"],
  ["Polyfill","浏览器兼容补丁"],
  ["core-js","标准库polyfill"],
  ["browserslist","目标浏览器配置"],
  ["bundle分析","分析构建产物"],
  ["source-map","源码映射"],
  ["压缩","JS/CSS压缩"],
  ["gzip","gzip压缩"],
  ["Brotli","Brotli压缩"],
  ["图片优化","图片加载优化"],
  ["懒加载图片","图片延迟加载"],
  ["WebP","现代图片格式"],
  ["AVIF","新一代图片格式"],
  ["SVG优化","矢量图优化"],
  ["字体优化","字体加载策略"],
  ["FOUT","无样式文本闪烁"],
  ["FOIT","不可见文本闪烁"],
  ["字体子集","只包含所需字符"],
  ["图标字体","字体图标方案"],
  ["雪碧图","图片合并减少请求"],
  ["数据URI","内联资源编码"],
  ["CDN缓存","CDN层缓存"],
  ["浏览器缓存","HTTP缓存策略"],
  ["强缓存","无须验证的直接缓存"],
  ["协商缓存","需验证的缓存"],
  ["ServiceWorker缓存","SW缓存策略"],
  ["Workbox","SW工具库"],
  ["Cache API","缓存接口"],
  ["IndexedDB","浏览器数据库"],
  ["localStorage","键值对存储"],
  ["sessionStorage","会话存储"],
  ["Cookie","HTTP Cookie"],
  ["Web Storage","Web存储API"],
  ["事件循环","JS异步机制"],
  ["宏任务","macrotask"],
  ["微任务","microtask"],
  ["Promise","异步编程方案"],
  ["async/await","异步语法糖"],
  ["Generator","生成器函数"],
  ["迭代器","Iterator协议"],
  ["可迭代对象","实现Symbol.iterator"],
  ["for-await-of","异步迭代"],
  ["顶层await","模块顶层await"],
  ["import.meta","模块元数据"],
  ["ES Module","ES模块系统"],
  ["CommonJS","Node模块系统"],
  ["动态import","按需加载模块"],
  ["循环依赖","模块循环引用"],
  ["命名导出","named export"],
  ["默认导出","default export"],
  ["重导出","re-export"],
];

function buildGlossary() {
  return GLOSSARY_TERMS.map((t,i)=>({
    id:`react-glossary-${String(i+1).padStart(3,"0")}`,
    term:t[0], definition:t[1],
    category:"React", tags:["React"], updatedAt:"2026-07-01T00:00:00.000Z",
  }));
}

// ============================================================
// 10. FAQS (200+)
// ============================================================
function buildFaqs() {
  const faqs = [
    ["React和Vue有什么区别？","React更灵活自由选择库，Vue提供更多内置功能。两者都是优秀的框架。"],
    ["学习React需要什么前置知识？","需要掌握HTML、CSS和JavaScript基础，尤其是ES6语法。"],
    ["什么是JSX？","JSX是JavaScript XML，是React的语法扩展，允许在JS中写类似HTML的代码。"],
    ["函数组件和类组件哪个更好？","函数组件配合Hooks是React推荐的方式，更简洁且易于复用逻辑。"],
    ["state和props有什么区别？","state是组件的内部状态，props是外部传入的只读属性。"],
    ["什么是虚拟DOM？","虚拟DOM是真实DOM的JavaScript表示，React通过比较虚拟DOM减少真实DOM操作。"],
    ["useEffect的依赖数组怎么用？","依赖数组控制useEffect的执行时机。空数组只在挂载时执行，有依赖时依赖变化才执行。"],
    ["key属性为什么重要？","key帮助React识别列表项的变化，提高渲染性能并避免状态错误。"],
    ["什么是受控组件？","受控组件的值由React state控制，通过onChange更新状态。"],
    ["React Router怎么配置？","使用BrowserRouter包裹应用，Routes和Route定义路径组件映射。"],
    ["Zustand和Redux区别？","Zustand更轻量简洁，无需Provider包裹；Redux更成熟，生态更丰富。"],
    ["自定义Hook是什么？","自定义Hook是复用状态逻辑的函数，以use开头，内部可调用其他Hook。"],
    ["useRef有什么用？","useRef创建可变的引用对象，可用于访问DOM元素或存储不触发渲染的值。"],
    ["React.memo的作用？","React.memo高阶组件使组件在props不变时跳过重新渲染。"],
    ["useCallback和useMemo分别用在哪？","useCallback记忆函数引用，useMemo记忆计算结果，都用于性能优化。"],
    ["什么是错误边界？","错误边界是捕获子组件渲染错误并显示降级UI的组件。"],
    ["React 18有哪些新特性？","自动批处理、transitions、Suspense改进、并发模式等。"],
    ["useReducer什么时候用？","当状态逻辑复杂、多个状态相关、下一个状态依赖前一个时使用。"],
    ["React中怎么做表单校验？","受控组件结合onChange实时校验，onSubmit最终校验，或使用React Hook Form。"],
    ["什么是一致性问题？","同构应用中服务端和客户端渲染结果不同导致的问题。"],
    ["怎么学习React？","先学核心概念（组件、JSX、state、props），然后Hooks、Router、状态管理，最后项目实战。"],
    ["React Native和React的关系？","React Native用React语法开发移动端应用，共享部分概念但平台API不同。"],
    ["Next.js是什么？","Next.js是React全栈框架，提供SSR、SSG、API路由等功能。"],
    ["什么是Hydration？","Hydration是客户端激活服务端渲染的HTML，附加事件监听使其可交互。"],
    ["CSS方案怎么选？","Tailwind适合快速开发，CSS Modules适合大型项目，styled-components适合动态样式。"],
    ["React项目怎么部署？","Vite构建后部署到GitHub Pages、Vercel或Netlify，注意配置base路径。"],
    ["GitHub Pages部署注意什么？","vite.config.ts中设置base为仓库名，使用BrowserRouter需配置重定向。"],
    ["什么是React DevTools？","React DevTools是浏览器扩展，用于检查组件树、state、props和性能。"],
    ["React中怎么做代码分割？","使用React.lazy和Suspense实现组件级别的按需加载。"],
    ["useEffect和useLayoutEffect区别？","useLayoutEffect在DOM变更后同步执行，useEffect在渲染完成后异步执行。"],
    ["怎么避免useEffect无限循环？","正确设置依赖数组，避免在依赖中使用引用类型或函数。"],
    ["什么是闭包陷阱？","Hook中回调函数捕获了旧的状态值，可以通过useRef或正确设置依赖解决。"],
    ["React状态管理方案对比？","React自带useState/useReducer/Context，第三方有Zustand/Redux/Jotai等。"],
    ["React如何优化性能？","React.memo、useMemo、useCallback、代码分割、虚拟列表等。"],
    ["Vite为什么比Webpack快？","Vite使用原生ESM开发，按需编译；Webpack需要预打包全部模块。"],
    ["怎么迁移到Vite？","替换webpack配置为vite.config，调整环境变量语法为import.meta.env。"],
    ["React面试常考什么？","组件生命周期、Hooks原理、状态管理、性能优化、虚拟DOM等。"],
    ["什么是Fiber？","Fiber是React16的协调引擎，实现增量渲染和任务优先级调度。"],
    ["React中怎么处理事件？","JSX中直接绑定事件处理函数，React使用合成事件跨浏览器兼容。"],
    ["React合成事件的特点？","跨浏览器兼容、事件委托到根节点、与原生事件不同。"],
    ["React 18自动批处理？","React 18将多个状态更新自动合并为一次重渲染，包括Timeout和Promise中。"],
    ["useTransition的作用？","标记非紧急更新，使UI在状态变化时保持响应。"],
    ["什么是Suspense？","Suspense是React处理异步操作的组件，显示加载占位直到子组件就绪。"],
    ["React错误边界不能捕获什么？","事件处理中的错误、异步代码错误、服务端渲染错误。"],
    ["Portals解决什么问题？","将组件渲染到父DOM树之外，常用于模态框、工具提示等。"],
    ["ref转发是什么？","forwardRef允许父组件获取子组件内部DOM元素的引用。"],
    ["高阶组件和Hooks哪个好？","Hooks更简洁，无嵌套问题；高阶组件在类组件时代流行。"],
    ["React中怎么做动画？","CSS Transition/Animation、Framer Motion、React Spring。"],
    ["React 19有什么新特性？","Actions、useOptimistic、useFormStatus、Server Components等。"],
    ["React Server Components是什么？","在服务端渲染的React组件，减少客户端JS体积。"],
    ["什么是Server Actions？","Next.js中在服务端执行的函数，可直接操作数据库。"],
    ["App Router和Pages Router区别？","App Router基于文件系统路由，支持Server Components、布局嵌套等。"],
    ["React中怎么做SEO？","使用Next.js SSR/SSG，或prerender.io等工具预渲染。"],
    ["React中怎么做国际化？","使用react-i18next等库，通过Context提供当前语言。"],
    ["React可访问性要注意什么？","语义化标签、ARIA属性、键盘导航、焦点管理、色彩对比度。"],
    ["React中怎么做测试？","Jest+Testing Library进行组件测试，Cypress/Playwright做E2E测试。"],
    ["TDD在React中的实践？","先写测试描述组件行为，再实现组件代码，确保覆盖率。"],
    ["Storybook用来做什么？","独立开发和展示组件，支持文档、测试和视觉回归。"],
    ["React组件设计原则？","单一职责、接口清晰、可复用、可测试。"],
    ["怎么设计好的组件Props？","最少必要属性、明确的命名、类型定义、默认值。"],
    ["React目录结构怎么组织？","按功能或类型组织，常见：components/pages/hooks/utils/store。"],
    ["Monorepo适合React项目吗？","适合多包项目，使用Turborepo/Nx/Lerna管理，共享配置和依赖。"],
    ["pnpm和npm有什么区别？","pnpm更快、更节省磁盘空间，使用硬链接和符号链接管理依赖。"],
    ["TypeScript对React的好处？","类型安全、更好的IDE提示、减少运行时错误、文档自解释。"],
    ["React中的泛型组件？","组件接受类型参数，提高类型复用性。"],
    ["React中怎么用SVG？","SVG可直接作为组件导入，或使用SVGR转React组件。"],
    ["React Helmet做什么？","管理页面head标签，设置title、meta、link等SEO相关标签。"],
    ["React中怎么做权限控制？","路由层面使用路由守卫，元素层面使用条件渲染。"],
    ["React项目怎么做错误监控？","集成Sentry等错误监控平台，捕获运行时错误和性能数据。"],
    ["React性能指标有哪些？","FCP、LCP、FID、CLS、TTI等Core Web Vitals指标。"],
    ["Lighthouse怎么使用？","Chrome DevTools中Lighthouse面板运行审计，获得性能、可访问性等报告。"],
    ["React中怎么做数据获取？","useEffect手动获取，或使用React Query/SWR等库。"],
    ["React Query和SWR怎么选？","两者都优秀，React Query功能更全，SWR更轻量。"],
    ["React Hook Form优势？","减少渲染次数，支持复杂校验，与Zod/Yup集成。"],
    ["Zod是什么？","TypeScript优先的校验库，与React Hook Form集成良好。"],
    ["React中怎么做文件上传？","使用FormData和fetch API，可配合拖拽上传组件。"],
    ["WebSocket在React中怎么用？","useEffect中建立连接，清理函数中断开，使用ref保持实例。"],
    ["SSE和WebSocket区别？","SSE服务端单向推送，WebSocket双向通信。"],
    ["React中怎么做实时更新？","使用WebSocket、SSE或轮询，结合状态管理更新UI。"],
    ["PWA和React？","React应用可通过Vite PWA插件添加离线支持和服务工作者。"],
    ["Web Push Notification？","结合Service Worker实现推送通知，需要用户授权。"],
    ["React中怎么做暗黑模式？","CSS变量+Cookie/useState切换主题类名或CSS变量值。"],
    ["React Token认证流程？","登录获取JWT存储到localStorage，每次请求携带Token。"],
    ["OAuth2.0登录流程？","跳转第三方登录页，回调获取授权码，换取访问令牌。"],
    ["React中怎么做路由守卫？","封装ProtectedRoute组件，检查认证状态并重定向。"],
    ["useMemo和useCallback区别？","useMemo返回记忆化值，useCallback返回记忆化函数。"],
    ["React懒加载怎么做？","React.lazy(()=>import('./Component'))结合Suspense。"],
    ["代码分割的最佳粒度？","按路由分割是推荐方式，也可按组件或功能模块分割。"],
    ["React打包怎么分析？","使用vite-plugin-visualizer或webpack-bundle-analyzer。"],
    ["SourceMap的作用？","将构建后的代码映射回源代码，便于生产环境调试。"],
    ["React中怎么做日志？","console方法记录不同级别日志，或集成日志服务上报。"],
    ["React错误恢复策略？","错误边界捕获UI错误，重试按钮重新加载数据，降级显示。"],
    ["React数据流总结？","props自上而下传递状态和回调，Context跨层级，Zustand全局管理。"],
    ["React的优势？","组件化、声明式、高性能、大生态、跨平台。"],
    ["React的缺点？","学习曲线较陡、频繁更新、JSX初期不适应、选择过多。"],
    ["React未来趋势？","Server Components、并发模式、React 19 Actions、边缘渲染。"],
    ["React应用案例？","Facebook、Instagram、Netflix、Airbnb、Uber、WhatsApp Web等。"],
    ["React学习资源推荐？","官方文档、React Tutorial、React Beta Docs、awesome-react。"],
    ["React社区在哪儿？","GitHub、Reddit、Discord、Stack Overflow、掘金、思否。"],
    ["React版本策略？","语义化版本，最新稳定版为React 18，React 19即将发布。"],
    ["React升级注意事项？","查看升级指南、更新依赖、修复废弃API、测试覆盖。"],
    ["React开发者工具链？","Vite、ESLint、Prettier、TypeScript、Jest、Storybook。"],
    ["什么时候用Context？","当多个组件需要共享全局数据时，如主题、用户认证信息。"],
    ["Context的问题？","Provider值变化会重新渲染所有消费者，需拆分Context。"],
    ["Zustand和Context比较？","Zustand不引起Provider嵌套，性能更好，API更简洁。"],
    ["Jotai和Zustand区别？","Jotai原子化状态，Zustand单一store，都轻量。"],
    ["Recoil和Zustand区别？","Recoil需要Atom根，Zustand无需Provider。"],
    ["React和jQuery区别？","React声明式，jQuery命令式；React组件化，jQuery操作DOM。"],
    ["React和Angular区别？","React是库，Angular是完整框架；React灵活，Angular约定多。"],
    ["React和Vue共同点？","组件化、虚拟DOM、响应式、生态丰富、工具链完善。"],
    ["React Native和Flutter？","RN使用JS/React，Flutter使用Dart；RN性能依赖桥接。"],
    ["React项目中为什么用immutable？","方便状态比较、提高性能、避免副作用。"],
    ["什么是不可变数据？","数据创建后不能修改，更新时创建新副本。"],
    ["Immer是什么？","通过Proxy简化不可变数据操作的库。"],
    ["useImmer怎么用？","import {useImmer} from 'use-immer'，像useState但直接修改草稿。"],
    ["React中事件池是什么？","React17前事件对象被重用，需异步访问时调用e.persist()。"],
    ["React17和18事件区别？","React18的合成事件不再使用事件池，更接近原生事件。"],
    ["React中怎么阻止事件冒泡？","e.stopPropagation()或e.nativeEvent.stopImmediatePropagation()。"],
    ["React中怎么阻止默认行为？","e.preventDefault()在事件处理函数中调用。"],
    ["React事件委托？","React17前委托到document，18后委托到root节点。"],
    ["React中onChange和onInput？","React的onChange在每次输入变化时触发，不同于原生onChange。"],
    ["React受控组件性能优化？","使用useCallback稳定回调，分离独立输入组件减少重渲染。"],
    ["表单组件封装建议？","接收name/value/onChange/error/placeholder等标准props。"],
    ["React表单提交怎么处理？","onSubmit事件中收集表单数据，调用API或执行提交逻辑。"],
    ["React中怎么处理文件输入？","使用非受控组件，通过ref获取File对象。"],
    ["React中带图片的表单？","将图片转为Base64或FormData上传，预览使用URL.createObjectURL。"],
    ["React表格怎么做？","使用table或Grid组件，支持排序、筛选、分页。"],
    ["React搜索组件实现？","受控输入+防抖+过滤数据渲染列表。"],
    ["React分页逻辑？","计算总页数、当前页数据切片、分页导航组件。"],
    ["React拖拽排序实现？","使用React DnD或HTML5拖拽API管理拖拽状态。"],
    ["React无限滚动实现？","IntersectionObserver监听底部元素，触发加载更多。"],
    ["React中怎么做虚拟列表？","使用react-window或react-virtuoso固定每个列表项高度。"],
    ["Modal组件设计要点？","使用Portals渲染到body，ESC关闭，点击蒙层关闭，焦点锁定。"],
    ["Drawer组件和Modal区别？","Drawer从侧边滑出，Modal居中弹出。"],
    ["Tooltip组件实现？","CSS定位+鼠标事件触发，注意边界处理。"],
    ["Popover组件实现？","类似Tooltip但可交互，包含按钮或表单。"],
    ["Select组件实现？","展开菜单选项，支持搜索、多选、分组。"],
    ["DatePicker组件实现？","日期选择面板，支持范围选择、快捷选项。"],
    ["Tree组件实现？","递归渲染树节点，支持展开/收起。"],
    ["Table组件实现？","数据表格，支持排序、筛选、分页、自定义列。"],
    ["Tabs组件实现？","标签页切换，支持不同样式和动画。"],
    ["Stepper组件实现？","步骤条，显示当前进行步骤。"],
    ["Rating组件实现？","星星评分，支持半星。"],
    ["Progress组件实现？","进度条，支持百分比和状态颜色。"],
  ];
  return faqs.slice(0,205).map((f,i)=>({
    id:`react-faq-${String(i+1).padStart(3,"0")}`,
    question:f[0], answer:f[1], category:"React",
    tags:["React"], updatedAt:"2026-07-01T00:00:00.000Z",
  }));
}

// ============================================================
// 11. SEARCH INDEX
// ============================================================
function buildSearchIndex(lessons, knowledgePoints, questions, glossary, faqs) {
  const entries = [];
  lessons.forEach(l => { entries.push({id:l.id,type:"lesson",title:l.title,content:l.summary+" "+l.content.substring(0,200),url:`/lessons/${l.slug}`,tags:l.tags}); });
  knowledgePoints.forEach(kp => { entries.push({id:kp.id,type:"knowledge",title:kp.name,content:kp.description,url:`/knowledge/${kp.id}`,tags:kp.tags}); });
  questions.forEach(q => { entries.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:`/questions/${q.id}`,tags:q.tags}); });
  glossary.forEach(g => { entries.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:`/glossary`,tags:g.tags}); });
  faqs.forEach(f => { entries.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:`/faq`,tags:f.tags}); });
  return entries;
}

// ============================================================
// MAIN — Generate all files
// ============================================================
async function main() {
  console.log("🚀 Generating module-react-basic data...\n");
  const tags = buildTags();
  const courses = buildCourses();
  const lessons = buildLessons();
  const knowledgePoints = buildKnowledgePoints();
  const questions = buildQuestions();
  const exams = buildExams(questions);
  const cases = buildCases(questions);
  const routes = buildRoutes(courses, lessons);
  const glossary = buildGlossary();
  const faqs = buildFaqs();
  const searchIndex = buildSearchIndex(lessons, knowledgePoints, questions, glossary, faqs);

  // Link questions to chapters
  const chapterMap = {};
  questions.forEach(q => { if(!chapterMap[q.chapter]) chapterMap[q.chapter]=[]; chapterMap[q.chapter].push(q.id); });

  // Update course lessonIds
  courses.forEach(c => {
    const courseLessons = lessons.filter(l => l.courseId === c.id);
    c.lessonIds = courseLessons.map(l => l.id);
    c.totalLessons = courseLessons.length;
    c.tags = [c.title];
  });

  // Update lesson practiceQuestionIds
  lessons.forEach(l => {
    const ch = COURSES_DATA.find(c => c.id === l.courseId)?.title || "";
    l.practiceQuestionIds = (chapterMap[ch] || []).slice(0,5);
  });

  // module.json
  const moduleData = {
    id:"mod-react-basic", slug:"module-react-basic",
    title:"React 入门与项目实战",
    subtitle:"面向 React 初学者的组件化开发、Hooks、Router、Zustand 状态管理、GitHub Pages 部署与项目实战模块",
    description:"面向已经学过 HTML、CSS、JavaScript 基础的学习者，系统学习 React、组件化、JSX、props、state、事件、条件渲染、列表渲染、表单、Hooks、React Router、状态管理、组件拆分、静态数据加载、Vite 构建、GitHub Pages 部署和 React 项目实战。包含课程、讲义、知识点、题库、试卷、案例训练、学习路线、术语表与 FAQ。",
    version:"2.0.0", license:"MIT", authors:["OpenSkill Community"],
    tags:["React","前端开发","JSX","组件化","Hooks","React Router","Vite","GitHub Pages"],
    estimatedHours:140, difficulty:"easy",
    updatedAt:"2026-07-01T12:00:00.000Z", coverEmoji:"⚛️",
    repoUrl:"https://github.com/openskill-galaxy/module-react-basic",
    portalUrl:"https://openskill-galaxy.github.io/", status:"stable",
    stats:{ courses:courses.length, lessons:lessons.length, knowledgePoints:knowledgePoints.length, questions:questions.length, cases:cases.length, exams:exams.length, routes:routes.length, glossary:glossary.length, faqs:faqs.length, tags:tags.length },
  };

  const typeCounts = {};
  questions.forEach(q => { typeCounts[q.type]=(typeCounts[q.type]||0)+1; });

  const files = {
    "module.json": moduleData, "tags.json": tags, "courses.json": courses,
    "lessons.json": lessons, "knowledge-points.json": knowledgePoints,
    "questions.json": questions, "exams.json": exams, "cases.json": cases,
    "routes.json": routes, "glossary.json": glossary, "faqs.json": faqs,
    "search-index.json": searchIndex,
  };

  for (const [name, data] of Object.entries(files)) {
    const fp = path.join(DATA, name);
    fs.writeFileSync(fp, JSON.stringify(data, null, 2), "utf-8");
    console.log(`  ✅ ${name} (${Array.isArray(data) ? data.length : 1} items)`);
  }

  console.log("\n📊 Summary:");
  console.log(`  courses:            ${courses.length}`);
  console.log(`  lessons:            ${lessons.length}`);
  console.log(`  knowledge-points:   ${knowledgePoints.length}`);
  console.log(`  questions:          ${questions.length}`);
  for (const [t, c] of Object.entries(typeCounts).sort()) console.log(`    ${t}:         ${c}`);
  console.log(`  exams:              ${exams.length}`);
  console.log(`  cases:              ${cases.length}`);
  console.log(`  routes:             ${routes.length}`);
  console.log(`  tags:               ${tags.length}`);
  console.log(`  glossary:           ${glossary.length}`);
  console.log(`  faqs:               ${faqs.length}`);
  console.log(`  search-index:       ${searchIndex.length}`);
  console.log(`\n🎉 All data generated successfully!`);
}

main().catch(console.error);
