class PostsController < ApplicationController
  def create
    @post = Post.create(
                        title: params[:title],
                        body: params[:body],
                        image: params[:image]
                        )

    render 'show.json.jbuilder'
  end

  def show
    @post = Post.find(params[:id])
    render 'show.json.jbuilder'
  end
end
