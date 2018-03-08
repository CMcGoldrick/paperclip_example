Rails.application.routes.draw do
  post '/posts' => 'posts#create'
  get '/posts/:id' => 'posts#show'
end
