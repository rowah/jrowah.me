defmodule JrowahWeb.BlogLiveTest do
  use JrowahWeb.ConnCase, async: true

  import Phoenix.LiveViewTest

  describe "/blog" do
    test "renders blog page", %{conn: conn} do
      {:ok, _blog_live, html} = live(conn, "/blog")

      assert html =~
               "In these blogs you&#39;ll find in-depth posts on mastering emerging tools, real-world problem-solving, reflections on growth, and a few basic tips and topics for those who are just getting started."
    end

    test "has nav links that are clickable and navigate to the correct pages", %{conn: conn} do
      {:ok, _blog_live, html} = live(conn, "/blog")

      assert html =~ "Home"
      assert html =~ "href=\"/\""

      assert html =~ "Blog"
      assert html =~ "href=\"/blog\""

      assert html =~ "Projects"
      assert html =~ "href=\"/projects\""
    end

    test "has links to other social media", %{conn: conn} do
      {:ok, _blog_live, html} = live(conn, "/blog")

      assert html =~ "GitHub"
      assert html =~ "href=\"https://github.com/rowah\""

      assert html =~ "LinkedIn"
      assert html =~ "href=\"https://www.linkedin.com/in/james-rowa/\""

      assert html =~ "Twitter"
      assert html =~ "href=\"https://twitter.com/jrowah\""

      # assert html =~ "Email"
      # assert html =~ "href=\"mailto:JlQpW@example.com\""
    end

    test "clicking the journey link takes you to the journey page", %{conn: conn} do
      {:ok, blog_live, _html} = live(conn, "/blog")

      assert {:error, {:live_redirect, %{kind: :push, to: "/journey"}}} =
               blog_live
               |> element(~s|.desktop-journey-link|)
               |> render_click()
    end

    test "clicking the projects link takes you to the projects page", %{conn: conn} do
      {:ok, blog_live, _html} = live(conn, "/blog")

      assert {:error, {:live_redirect, %{kind: :push, to: "/projects"}}} =
               blog_live
               |> element(~s|.desktop-projects-link|)
               |> render_click()
    end

    test "clicking the home link takes you to the blog page", %{conn: conn} do
      {:ok, blog_live, _html} = live(conn, "/blog")

      assert {:error, {:live_redirect, %{kind: :push, to: "/"}}} =
               blog_live
               |> element(~s|.desktop-home-link|)
               |> render_click()

      # TODO: Test the newly rendered liveview
    end

    test "disconnected and connected render", %{conn: conn} do
      {:ok, page_live, disconnected_html} = live(conn, "/blog")
      assert disconnected_html =~ "Blog"
      assert render(page_live) =~ "Blog"
    end
  end
end
