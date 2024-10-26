defmodule JrowahWeb.BlogLive.Index do
  @moduledoc false
  use JrowahWeb, :live_view

  alias Jrowah.Blog

  @impl Phoenix.LiveView
  def mount(_params, _session, socket) do
    {:ok,
     socket
     |> assign(page_title: "- Blog")
     |> assign(all_tags: Blog.all_tags())}
  end

  @impl Phoenix.LiveView
  def handle_params(params, _url, socket) do
    tag =
      case Map.get(params, "tag") do
        nil -> nil
        tag -> String.downcase(tag)
      end

    {:noreply,
     socket
     |> assign(search_tag: tag)
     |> stream(:articles, Blog.get_articles_by_tag(tag), reset: true)}
  end

  @impl Phoenix.LiveView
  def handle_event("filter_by_tag", %{"tag" => tag}, socket) do
    tag = String.downcase(tag)

    socket =
      case tag == socket.assigns.search_tag do
        true -> push_patch(socket, to: ~p"/blog")
        false -> push_patch(socket, to: ~p"/blog/tag/#{tag}")
      end

    {:noreply, socket}
  end

  @impl Phoenix.LiveView
  def handle_event("get_all_articles", _params, socket) do
    {:noreply, push_patch(socket, to: ~p"/blog")}
  end
end
