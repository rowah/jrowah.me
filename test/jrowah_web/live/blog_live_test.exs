defmodule JrowahWeb.BlogLiveTest do
  use JrowahWeb.ConnCase, async: true

  import Phoenix.LiveViewTest

  test "disconnected and connected render", %{conn: conn} do
    {:ok, page_live, disconnected_html} = live(conn, "/blog")
    assert disconnected_html =~ "Blog"
    assert render(page_live) =~ "Blog"
  end
end
