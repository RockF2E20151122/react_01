// 使用 React.createClass 创建一个组件
var DemoComponent = React.createClass({
    // 使用 getInitialState 的返回值作为数据的默认值
    getInitialState: function () {
        // this.props 用于从组件外部传入数据
        movies = this.props.movies;
        return {
            loading: true,
            title: '我喜欢的电影',
            // 注意这里将 外部传入的数据赋值给了 this.state
            movies: movies
        }
    },

    // 使用 render 方法自动渲染 DOM
    render: function () {
        var self = this;
        // this.state 用于存储数据
        var title  = this.state.title;
        var movies = this.state.movies.map(function (movie) {
            return (
                <li className="movie-item" key={movie.id}>
                    <span className="movie-name">{movie.name}</span>
                    -
                    <span className="movie-date">{movie.date}</span>
                </li>
            )
        }.bind(this));// 注意这里 bind(this) 修正了上下文

        return (
            <div className="component-hello">
                <h1 className="hello-title">Hello React</h1>
                <p  className="hello-desc">React 初探</p>

                <div className="hello-movies">
                    <p2>{title}</p2>
                    <ul>{movies}</ul>
                </div>
            </div>
        )
    }
});

// 将组件插入到网页中指定的位置
// 在使用组件时传入 movies 数据
var movies = [
    {
        id: 7,
        name: '速度与激情7',
        date: 2015
    },
    {
        id: 6,
        name: '速度与激情6',
        date: 2013
    }
];
React.render(<DemoComponent movies={movies}/>, document.getElementById('demo'));
