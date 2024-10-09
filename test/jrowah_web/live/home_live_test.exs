defmodule JrowahWeb.HomeLiveTest do
  use JrowahWeb.ConnCase, async: true

  import Phoenix.LiveViewTest

  describe "/" do
    test "renders home page", %{conn: conn} do
      {:ok, _home_live, html} = live(conn, "/")
      assert html =~ "JRowah"

      assert html =~ "Self-taught software developer, biochemist and teacher."
    end

    test "has nav links that are clickable and lead to the correct pages", %{conn: conn} do
      {:ok, _home_live, html} = live(conn, "/")

      assert html =~ "Home"
      assert html =~ "href=\"/\""

      assert html =~ "About"
      assert html =~ "href=\"/about\""

      assert html =~ "Blog"
      assert html =~ "href=\"/blog\""

      assert html =~ "Projects"
      assert html =~ "href=\"/projects\""
    end

    test "has links to other social media", %{conn: conn} do
      {:ok, _home_live, html} = live(conn, "/")

      assert html =~ "GitHub"
      assert html =~ "href=\"https://github.com/rowah\""

      assert html =~ "LinkedIn"
      assert html =~ "href=\"https://www.linkedin.com/in/james-rowa/\""

      assert html =~ "Twitter"
      assert html =~ "href=\"https://twitter.com/jrowah\""

      # assert html =~ "Email"
      # assert html =~ "href=\"mailto:JlQpW@example.com\""
    end

    test "clicking the about link takes you to the about page", %{conn: conn} do
      {:ok, home_live, _html} = live(conn, "/")

      assert {:error, {:live_redirect, %{kind: :push, to: "/about"}}} =
               home_live
               |> element(~s|a:fl-contains("About")|)
               |> render_click()
    end

    test "clicking the projects link takes you to the projects page", %{conn: conn} do
      {:ok, home_live, _html} = live(conn, "/")

      assert {:error, {:live_redirect, %{kind: :push, to: "/projects"}}} =
               home_live
               |> element(~s|a:fl-contains("Projects")|)
               |> render_click()
    end

    test "clicking the blog link takes you to the blog page", %{conn: conn} do
      {:ok, home_live, _html} = live(conn, "/")

      assert {:error, {:live_redirect, %{kind: :push, to: "/blog"}}} =
               home_live
               |> element(~s|a:fl-contains("Blog")|)
               |> render_click()

      # TODO: Test the newly rendered liveview
    end

    test "disconnected and connected render", %{conn: conn} do
      {:ok, page_live, disconnected_html} = live(conn, "/")
      assert disconnected_html =~ "Home"
      assert render(page_live) =~ "Home"
    end
  end
end
