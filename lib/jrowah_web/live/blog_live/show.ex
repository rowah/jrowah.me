defmodule JrowahWeb.BlogLive.Show do
  @moduledoc false
  use JrowahWeb, :live_view

  alias Jrowah.Blog

  @impl Phoenix.LiveView
  def mount(%{"slug" => slug} = _params, _session, socket) do
    article = Blog.get_article_by_slug(slug)

    {:ok,
     socket
     |> assign(:article, article)
     |> assign(:page_title, "- #{article.title}")}
  end
end
