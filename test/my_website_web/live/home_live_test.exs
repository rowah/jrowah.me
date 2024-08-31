defmodule MyWebsiteWeb.HomeLiveTest do
  use MyWebsiteWeb.ConnCase

  import Phoenix.LiveViewTest

  describe "/" do
    test "renders page", %{conn: conn} do
      {:ok, _view, html} = live(conn, "/")

      assert html =~ "James Rowa"
      assert html =~ "Software Developer"
      assert html =~ "Home"

      assert
    end

    test "navigates to about page", %{conn: conn} do
    end
  end
end
