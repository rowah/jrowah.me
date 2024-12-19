defmodule JrowahWeb.TermsLive.Index do
  @moduledoc false

  use JrowahWeb, :live_view

  @impl Phoenix.LiveView
  def mount(_params, _session, socket) do
    {:ok, assign(socket, page_title: "- Legal Terms")}
  end
end
