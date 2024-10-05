defmodule JrowahWeb.AboutLiveTest do
  use JrowahWeb.ConnCase, async: true

  import Phoenix.LiveViewTest

  test "disconnected and connected render", %{conn: conn} do
    {:ok, page_live, disconnected_html} = live(conn, "/about")
    assert disconnected_html =~ "About"
    assert render(page_live) =~ "About"
  end
end
