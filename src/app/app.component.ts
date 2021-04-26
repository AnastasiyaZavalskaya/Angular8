import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Components';

  posts: Post[] = [
    {
      title: 'Хочу выучить Ангулар Компненты',
      text: 'Все еще хочу выучить',
      id: 1
    },
    {
      title: 'Заголовок 2',
      text: 'Текст 2',
      id: 2
    }
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
