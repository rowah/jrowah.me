defmodule JrowahWeb.CoreComponents do
  @moduledoc """
  Provides core UI components.

  At first glance, this module may seem daunting, but its goal is to provide
  core building blocks for your application, such as modals, tables, and
  forms. The components consist mostly of markup and are well-documented
  with doc strings and declarative assigns. You may customize and style
  them in any way you want, based on your application growth and needs.

  The default components use Tailwind CSS, a utility-first CSS framework.
  See the [Tailwind CSS documentation](https://tailwindcss.com) to learn
  how to customize them or feel free to swap in another framework altogether.

  Icons are provided by [heroicons](https://heroicons.com). See `icon/1` for usage.
  """
  use Gettext, backend: JrowahWeb.Gettext
  use Phoenix.Component
  use JrowahWeb, :verified_routes

  import Phoenix.HTML

  alias Phoenix.HTML.Form
  alias Phoenix.LiveView.JS

  @doc """
  Renders an avatar.

  ## Examples

      <.avatar />

  """
  @spec avatar(map()) :: Phoenix.LiveView.Rendered.t()
  def avatar(assigns) do
    ~H"""
    <.link navigate={~p"/"} class="avatar cursor-pointer">
      <img
        loading="lazy"
        src="https://avatars.githubusercontent.com/u/76947107?s=400&u=cd0be7843d2c30ae6f985634ac9966b11242aacb&v=4"
        alt="Jrowah's Portrait"
        class="w-10 h-10 rounded-full"
      />
    </.link>
    """
  end

  defp theme_button(assigns) do
    ~H"""
    <button
      id="theme-toggle"
      type="button"
      phx-update="ignore"
      phx-hook="DarkThemeToggle"
      class="text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg text-sm p-2"
    >
      <span id="theme-toggle-dark-icon">
        <.icon name="hero-moon-solid" class="w-6 h-6 text-blue-400" />
      </span>
      <span id="theme-toggle-light-icon">
        <.icon name="hero-sun-solid" class="w-6 h-6 text-blue-400" />
      </span>
    </button>
    """
  end

  @doc """
  Renders the page intro.
  """
  attr :title, :string, default: nil
  slot :inner_block

  @spec page_intro(map()) :: Phoenix.LiveView.Rendered.t()
  def page_intro(assigns) do
    ~H"""
    <.title :if={@title} text={@title} class="text-blue-600 dark:text-blue-500" />
    <div class={@inner_block != [] && "text-pretty my-4 leading-relaxed md:my-6 lg:w-2/3"}>
      <%= render_slot(@inner_block) %>
    </div>
    """
  end

  @doc """
  Renders a title.
  """
  attr :text, :string, required: true
  attr :class, :string, default: nil

  @spec title(map()) :: Phoenix.LiveView.Rendered.t()
  def title(assigns) do
    ~H"""
    <h1 class={["text-3xl font-semibold", @class]}>
      <%= @text %>
    </h1>
    """
  end

  @doc """
  Renders a project card

  ## Examples

      <.project_card title="Project Title" description="Project Description" />

  """

  attr :title, :string, required: true
  attr :src, :string, required: true
  attr :alt, :string, required: true
  attr :href, :string, required: true
  attr :description, :string, required: true

  @spec project_card(map()) :: Phoenix.LiveView.Rendered.t()
  def project_card(assigns) do
    ~H"""
    <div class="project-card">
      <img class="w-full h-56 rounded-lg lg:w-64" src={@src} alt={@alt} />
      <div class="flex flex-col justify-between py-6 lg:mx-6">
        <a
          href={@href}
          class="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <.icon name="hero-link" class="w-5 h-5 inline-block" />
          <%= @title %>
        </a>

        <span class="text-sm text-gray-500 dark:text-gray-200">
          <%= @description %>
        </span>
      </div>
    </div>
    """
  end

  @doc """
  Renders an article card

  ## Examples

      <.article_card
        title="Article Title"

        src="https://picsum.photos/seed/1/200/300"
        alt="Article Image"
        href="https://www.google.com"
      />


  """

  attr :title, :string, required: true
  attr :id, :string, default: nil
  attr :class, :string, default: nil
  attr :link, :string, required: true
  attr :description, :string, required: true
  attr :tags, :list, default: []
  attr :date, :any, required: true
  attr :reading_time, :integer, required: true

  @spec article_card(map()) :: Phoenix.LiveView.Rendered.t()
  def article_card(assigns) do
    ~H"""
    <.link id={@id} navigate={@link} rel="noopener noreferrer">
      <article class={[
        "card group h-full w-full cursor-pointer transition-all hover:-translate-y-1",
        @class
      ]}>
        <div class="article-card">
          <h2 class="card-title text-pretty mb-4 text-blue-400 md:text-2xl">
            <%= @title %>
          </h2>
          <hr class="border border-gray-600 dark:border-white mb-2" />
          <%!-- <hr class="bg-gray-900 dark:bg-white" /> --%>
          <div class="mb-4 flex w-fit items-center">
            <span class="text-xs font-semibold">
              <%= Calendar.strftime(@date, "%d %B %Y") %>
            </span>
            <span class="bg-base-content mx-2 h-px w-4 flex-1 opacity-20" />
            <span class="text-xs font-semibold">
              <%= @reading_time %> min read
            </span>
          </div>
          <div :if={@tags != []} class="mb-4 flex flex-wrap gap-x-2 gap-y-2">
            <span
              :for={tag <- @tags}
              class="bg-gray-200 dark:bg-zinc-700 rounded-lg px-2 py-1 transition-transform duration-100 hover:scale-105"
            >
              <%= case tag do %>
                <% "Elixir" -> %>
                  <span class="text-[#BA68C8]">Elixir</span>
                <% "Phoenix" -> %>
                  <span class="text-[#F4511E]">Phoenix</span>
                <% "LiveView" -> %>
                  <span class="from-orange-400 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent">
                    LiveView
                  </span>
                <% "Ecto" -> %>
                  <span class="text-[#66BB6A]">Ecto</span>
                <% "React" -> %>
                  <span class="text-[#64B5F6]">React</span>
                <% _other -> %>
                  <%= tag %>
              <% end %>
            </span>
          </div>
          <p class="text-pretty mb-4">
            <%= @description %>
          </p>
          <div class="card-actions justify-end">
            <div class="flex items-center space-x-2">
              <span class="text-content group-hover:text-primary group-hover:underline">
                Read more
              </span>
              <.icon name="hero-arrow-right" class="text-content group-hover:text-primary" />
            </div>
          </div>
        </div>
      </article>
    </.link>
    """
  end

  @doc """
  Renders blog tags

  ## Examples

      <.blog_tags
        tags={@tags}
      />

  """
  attr :id, :string, default: nil
  attr :tags, :list, required: true
  attr :search_tag, :string, default: nil
  attr :select_event, :string

  @spec blog_tags(map()) :: Phoenix.LiveView.Rendered.t()
  def blog_tags(assigns) do
    ~H"""
    <section id={@id} class="mx-2">
      <div class="flex flex-wrap gap-2">
        <button
          :for={tag <- @tags}
          phx-click="filter_by_tag"
          phx-value-tag={tag}
          class={[
            "rounded-lg px-2 py-1 transition-transform duration-100 hover:scale-105",
            (String.downcase(tag) == @search_tag && "bg-blue-500 dark:bg-blue-500 text-white") ||
              "bg-gray-200 dark:bg-zinc-700"
          ]}
        >
          <%= tag %>
        </button>
      </div>
    </section>
    """
  end

  @doc """
  Renders a navigation bar.

  ## Examples

      <.navbar current_url={@current_url}>
        <.link to="/">Home</.link>
        <.link to="/about">About</.link>
      </.navbar>
  """

  @spec navbar(map()) :: Phoenix.LiveView.Rendered.t()
  def navbar(assigns) do
    ~H"""
    <nav class="flex h-[80px] bg-white dark:bg-gray-800 w-full font-bold text-lg text-zinc-500 text-blue-600 dark:text-blue-400">
      <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4">
        <.avatar />

        <div class="ml-auto">
          <div class="bg-base-300 hidden space-x-4 px-4 py-2 sm:block">
            <.link
              :for={
                %{label: label, unique_class: unique_class, route: route} <-
                  main_nav_links()
              }
              navigate={route}
              class={[
                unique_class,
                active?(@current_url, route) && "border-b-2 border-current pb-2"
              ]}
            >
              <span class="inline-flex items-center justify-center text-center bg-blue-500 h-6 w-6 rounded-full text-white">
                <.icon name={nav_icon_names(label)} class="w-4 h-4" />
              </span>
              <%= label %>
            </.link>
          </div>

          <.mobile_navigation_modal id="mobile_navigation_modal" header="Navigation">
            <nav class="mt-4 flex flex-col space-y-4">
              <.link
                :for={%{label: label, route: route} <- main_nav_links()}
                navigate={route}
                class={[
                  active?(@current_url, route) && "underline underline-offset-8"
                ]}
              >
                <%= label %>
              </.link>
            </nav>
          </.mobile_navigation_modal>

          <div class="rounded-btn bg-base-300 block p-2 sm:hidden">
            <button
              class="btn-sm flex items-center font-semibold"
              phx-click={show_modal("mobile_navigation_modal")}
            >
              <span><.icon name="hero-bars-3-solid" class="h-5 w-5" /></span>
            </button>
          </div>
        </div>

        <.theme_button />
      </div>
    </nav>
    """
  end

  defp nav_icon_names(label) do
    case label do
      "Home" -> "hero-home-solid"
      "About" -> "hero-user-solid"
      "Blog" -> "hero-pencil-square-solid"
      "Projects" -> "hero-folder-solid"
      "Journey" -> "hero-arrow-trending-up-solid"
    end
  end

  @spec footer(map()) :: Phoenix.LiveView.Rendered.t()
  def footer(assigns) do
    ~H"""
    <footer class="flex flex-col inset-x-0 footer footer-center absolute w-full max-w-[1260px] px-4 sm:px-6 lg:px-8 mx-auto h-[15%]">
      <hr />
      <div class="flex justify-between px-10 py-5 bg-base-200 text-base-content text-blue-600 dark:text-blue-400">
        <div></div>
        <div class="md:w-[20%]">
          <p class="md:text-right font-bold text-lg">Find Me On</p>
          <div class="flex justify-between">
            <.link
              :for={%{label: label, link: link, svg: svg} <- social_links()}
              href={link}
              target="_blank"
              class="text-black dark:text-white"
            >
              <span class="hidden md:block"><%= label %></span>
              <%= raw(svg) %>
            </.link>
          </div>
        </div>
      </div>
    </footer>
    """
  end

  @doc """
  Renders a modal.

  ## Examples

      <.modal id="confirm-modal">
        This is a modal.
      </.modal>

  JS commands may be passed to the `:on_cancel` to configure
  the closing/cancel event, for example:

      <.modal id="confirm" on_cancel={JS.navigate(~p"/posts")}>
        This is another modal.
      </.modal>

  """
  attr :id, :string, required: true
  attr :header, :string, default: nil
  attr :show, :boolean, default: false
  attr :on_cancel, JS, default: %JS{}
  slot :inner_block, required: true

  def modal(assigns) do
    ~H"""
    <div
      id={@id}
      phx-mounted={@show && show_modal(@id)}
      phx-remove={hide_modal(@id)}
      data-cancel={JS.exec(@on_cancel, "phx-remove")}
      class="relative z-50 hidden"
    >
      <div id={"#{@id}-bg"} class="bg-zinc-50/90 fixed inset-0 transition-opacity" aria-hidden="true" />
      <div
        class="fixed inset-0 overflow-y-auto"
        aria-labelledby={"#{@id}-title"}
        aria-describedby={"#{@id}-description"}
        role="dialog"
        aria-modal="true"
        tabindex="0"
      >
        <div class="flex min-h-full items-center justify-center">
          <div class="w-full max-w-3xl p-4 sm:p-6 lg:py-8">
            <.focus_wrap
              id={"#{@id}-container"}
              phx-window-keydown={JS.exec("data-cancel", to: "##{@id}")}
              phx-key="escape"
              phx-click-away={JS.exec("data-cancel", to: "##{@id}")}
              class="shadow-zinc-700/10 ring-zinc-700/10 relative hidden rounded-2xl bg-white p-14 shadow-lg ring-1 transition"
            >
              <div class="absolute top-6 right-5">
                <button
                  phx-click={JS.exec("data-cancel", to: "##{@id}")}
                  type="button"
                  class="-m-3 flex-none p-3 opacity-20 hover:opacity-40"
                  aria-label={gettext("close")}
                >
                  <.icon name="hero-x-mark-solid" class="h-5 w-5" />
                </button>
              </div>
              <div id={"#{@id}-content"}>
                <%= render_slot(@inner_block) %>
              </div>
            </.focus_wrap>
          </div>
        </div>
      </div>
    </div>
    """
  end

  @doc """
  Renders a mobile navigation modal.

  ## Examples

      <.mobile_navigation_modal id="confirm-modal">
        This is a mobile navigation modal.
      </.mobile_navigation_modal>

  JS commands may be passed to the `:on_cancel` to configure
  the closing/cancel event, for example:

      <.mobile_navigation_modal id="confirm" on_cancel={JS.navigate(~p"/posts")}>
        This is another mobile navigation modal.
      </.mobile_navigation_modal>

  """
  attr :id, :string, required: true
  attr :header, :string, default: nil
  attr :show, :boolean, default: false
  attr :on_cancel, JS, default: %JS{}
  slot :inner_block, required: true

  def mobile_navigation_modal(assigns) do
    ~H"""
    <div
      id={@id}
      phx-mounted={@show && show_modal(@id)}
      phx-remove={hide_modal(@id)}
      data-cancel={JS.exec(@on_cancel, "phx-remove")}
      class="relative z-50 hidden bg-black"
    >
      <div
        class="fixed inset-0 top-16 overflow-y-auto sm:hidden"
        aria-labelledby={"#{@id}-title"}
        aria-describedby={"#{@id}-description"}
        role="dialog"
        aria-modal="true"
        tabindex="0"
      >
        <div class="w-full max-w-3xl p-4 sm:p-6 lg:py-8">
          <.focus_wrap
            id={"#{@id}-container"}
            phx-window-keydown={JS.exec("data-cancel", to: "##{@id}")}
            phx-key="escape"
            phx-click-away={JS.exec("data-cancel", to: "##{@id}")}
            class="shadow-zinc-700/10 ring-zinc-700/10 relative hidden rounded-2xl bg-zinc-800 p-8 shadow-lg ring-1 transition"
          >
            <div class="absolute top-6 right-5">
              <button
                phx-click={JS.exec("data-cancel", to: "##{@id}")}
                type="button"
                class="-m-3 flex-none p-3 opacity-20 hover:opacity-40"
                aria-label={gettext("close")}
              >
                <.icon name="hero-x-mark-solid" class="h-5 w-5" />
              </button>
            </div>
            <div id={"#{@id}-content"}>
              <%= render_slot(@inner_block) %>
            </div>
          </.focus_wrap>
        </div>
      </div>
    </div>
    """
  end

  @doc """
  Renders flash notices.

  ## Examples

      <.flash kind={:info} flash={@flash} />
      <.flash kind={:info} phx-mounted={show("#flash")}>Welcome Back!</.flash>
  """
  attr :id, :string, doc: "the optional id of flash container"
  attr :flash, :map, default: %{}, doc: "the map of flash messages to display"
  attr :title, :string, default: nil
  attr :kind, :atom, values: [:info, :error], doc: "used for styling and flash lookup"
  attr :rest, :global, doc: "the arbitrary HTML attributes to add to the flash container"

  slot :inner_block, doc: "the optional inner block that renders the flash message"

  def flash(assigns) do
    assigns = assign_new(assigns, :id, fn -> "flash-#{assigns.kind}" end)

    ~H"""
    <div
      :if={msg = render_slot(@inner_block) || Phoenix.Flash.get(@flash, @kind)}
      id={@id}
      phx-click={JS.push("lv:clear-flash", value: %{key: @kind}) |> hide("##{@id}")}
      role="alert"
      class={[
        "fixed top-2 right-2 mr-2 w-80 sm:w-96 z-50 rounded-lg p-3 ring-1",
        @kind == :info && "bg-emerald-50 text-emerald-800 ring-emerald-500 fill-cyan-900",
        @kind == :error && "bg-rose-50 text-rose-900 shadow-md ring-rose-500 fill-rose-900"
      ]}
      {@rest}
    >
      <p :if={@title} class="flex items-center gap-1.5 text-sm font-semibold leading-6">
        <.icon :if={@kind == :info} name="hero-information-circle-mini" class="h-4 w-4" />
        <.icon :if={@kind == :error} name="hero-exclamation-circle-mini" class="h-4 w-4" />
        <%= @title %>
      </p>
      <p class="mt-2 text-sm leading-5"><%= msg %></p>
      <button type="button" class="group absolute top-1 right-1 p-2" aria-label={gettext("close")}>
        <.icon name="hero-x-mark-solid" class="h-5 w-5 opacity-40 group-hover:opacity-70" />
      </button>
    </div>
    """
  end

  @doc """
  Shows the flash group with standard titles and content.

  ## Examples

      <.flash_group flash={@flash} />
  """
  attr :flash, :map, required: true, doc: "the map of flash messages"
  attr :id, :string, default: "flash-group", doc: "the optional id of flash container"

  def flash_group(assigns) do
    ~H"""
    <div id={@id}>
      <.flash kind={:info} title={gettext("Success!")} flash={@flash} />
      <.flash kind={:error} title={gettext("Error!")} flash={@flash} />
      <.flash
        id="client-error"
        kind={:error}
        title={gettext("We can't find the internet")}
        phx-disconnected={show(".phx-client-error #client-error")}
        phx-connected={hide("#client-error")}
        hidden
      >
        <%= gettext("Attempting to reconnect") %>
        <.icon name="hero-arrow-path" class="ml-1 h-3 w-3 animate-spin" />
      </.flash>

      <.flash
        id="server-error"
        kind={:error}
        title={gettext("Something went wrong!")}
        phx-disconnected={show(".phx-server-error #server-error")}
        phx-connected={hide("#server-error")}
        hidden
      >
        <%= gettext("Hang in there while we get back on track") %>
        <.icon name="hero-arrow-path" class="ml-1 h-3 w-3 animate-spin" />
      </.flash>
    </div>
    """
  end

  @doc """
  Renders a simple form.

  ## Examples

      <.simple_form for={@form} phx-change="validate" phx-submit="save">
        <.input field={@form[:email]} label="Email"/>
        <.input field={@form[:username]} label="Username" />
        <:actions>
          <.button>Save</.button>
        </:actions>
      </.simple_form>
  """
  attr :for, :any, required: true, doc: "the data structure for the form"
  attr :as, :any, default: nil, doc: "the server side parameter to collect all input under"

  attr :rest, :global,
    include: ~w(autocomplete name rel action enctype method novalidate target multipart),
    doc: "the arbitrary HTML attributes to apply to the form tag"

  slot :inner_block, required: true
  slot :actions, doc: "the slot for form actions, such as a submit button"

  def simple_form(assigns) do
    ~H"""
    <.form :let={f} for={@for} as={@as} {@rest}>
      <div class="mt-10 space-y-8 bg-white">
        <%= render_slot(@inner_block, f) %>
        <div :for={action <- @actions} class="mt-2 flex items-center justify-between gap-6">
          <%= render_slot(action, f) %>
        </div>
      </div>
    </.form>
    """
  end

  @doc """
  Renders a button.

  ## Examples

      <.button>Send!</.button>
      <.button phx-click="go" class="ml-2">Send!</.button>
  """
  attr :type, :string, default: nil
  attr :class, :string, default: nil
  attr :rest, :global, include: ~w(disabled form name value)

  slot :inner_block, required: true

  def button(assigns) do
    ~H"""
    <button
      type={@type}
      class={[
        "phx-submit-loading:opacity-75 rounded-lg bg-zinc-900 hover:bg-zinc-700 py-2 px-3",
        "text-sm font-semibold leading-6 text-white active:text-white/80",
        @class
      ]}
      {@rest}
    >
      <%= render_slot(@inner_block) %>
    </button>
    """
  end

  @doc """
  Renders an input with label and error messages.

  A `Phoenix.HTML.FormField` may be passed as argument,
  which is used to retrieve the input name, id, and values.
  Otherwise all attributes may be passed explicitly.

  ## Types

  This function accepts all HTML input types, considering that:

    * You may also set `type="select"` to render a `<select>` tag

    * `type="checkbox"` is used exclusively to render boolean values

    * For live file uploads, see `Phoenix.Component.live_file_input/1`

  See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
  for more information. Unsupported types, such as hidden and radio,
  are best written directly in your templates.

  ## Examples

      <.input field={@form[:email]} type="email" />
      <.input name="my-input" errors={["oh no!"]} />
  """
  attr :id, :any, default: nil
  attr :name, :any
  attr :label, :string, default: nil
  attr :value, :any

  attr :type, :string,
    default: "text",
    values: ~w(checkbox color date datetime-local email file month number password
               range search select tel text textarea time url week)

  attr :field, Phoenix.HTML.FormField,
    doc: "a form field struct retrieved from the form, for example: @form[:email]"

  attr :errors, :list, default: []
  attr :checked, :boolean, doc: "the checked flag for checkbox inputs"
  attr :prompt, :string, default: nil, doc: "the prompt for select inputs"
  attr :options, :list, doc: "the options to pass to Phoenix.HTML.Form.options_for_select/2"
  attr :multiple, :boolean, default: false, doc: "the multiple flag for select inputs"

  attr :rest, :global,
    include: ~w(accept autocomplete capture cols disabled form list max maxlength min minlength
                multiple pattern placeholder readonly required rows size step)

  def input(%{field: %Phoenix.HTML.FormField{} = field} = assigns) do
    errors = if Phoenix.Component.used_input?(field), do: field.errors, else: []

    assigns
    |> assign(field: nil, id: assigns.id || field.id)
    |> assign(:errors, Enum.map(errors, &translate_error(&1)))
    |> assign_new(:name, fn -> if assigns.multiple, do: field.name <> "[]", else: field.name end)
    |> assign_new(:value, fn -> field.value end)
    |> input()
  end

  def input(%{type: "checkbox"} = assigns) do
    assigns =
      assign_new(assigns, :checked, fn ->
        Form.normalize_value("checkbox", assigns[:value])
      end)

    ~H"""
    <div>
      <label class="flex items-center gap-4 text-sm leading-6 text-zinc-600">
        <input type="hidden" name={@name} value="false" disabled={@rest[:disabled]} />
        <input
          type="checkbox"
          id={@id}
          name={@name}
          value="true"
          checked={@checked}
          class="rounded border-zinc-300 text-zinc-900 focus:ring-0"
          {@rest}
        />
        <%= @label %>
      </label>
      <.error :for={msg <- @errors}><%= msg %></.error>
    </div>
    """
  end

  def input(%{type: "select"} = assigns) do
    ~H"""
    <div>
      <.label for={@id}><%= @label %></.label>
      <select
        id={@id}
        name={@name}
        class="mt-2 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-zinc-400 focus:ring-0 sm:text-sm"
        multiple={@multiple}
        {@rest}
      >
        <option :if={@prompt} value=""><%= @prompt %></option>
        <%= Phoenix.HTML.Form.options_for_select(@options, @value) %>
      </select>
      <.error :for={msg <- @errors}><%= msg %></.error>
    </div>
    """
  end

  def input(%{type: "textarea"} = assigns) do
    ~H"""
    <div>
      <.label for={@id}><%= @label %></.label>
      <textarea
        id={@id}
        name={@name}
        class={[
          "mt-2 block w-full rounded-lg text-zinc-900 focus:ring-0 sm:text-sm sm:leading-6 min-h-[6rem]",
          @errors == [] && "border-zinc-300 focus:border-zinc-400",
          @errors != [] && "border-rose-400 focus:border-rose-400"
        ]}
        {@rest}
      ><%= Phoenix.HTML.Form.normalize_value("textarea", @value) %></textarea>
      <.error :for={msg <- @errors}><%= msg %></.error>
    </div>
    """
  end

  # All other inputs text, datetime-local, url, password, etc. are handled here...
  def input(assigns) do
    ~H"""
    <div>
      <.label for={@id}><%= @label %></.label>
      <input
        type={@type}
        name={@name}
        id={@id}
        value={Phoenix.HTML.Form.normalize_value(@type, @value)}
        class={[
          "mt-2 block w-full rounded-lg text-zinc-900 focus:ring-0 sm:text-sm sm:leading-6",
          @errors == [] && "border-zinc-300 focus:border-zinc-400",
          @errors != [] && "border-rose-400 focus:border-rose-400"
        ]}
        {@rest}
      />
      <.error :for={msg <- @errors}><%= msg %></.error>
    </div>
    """
  end

  @doc """
  Renders a label.
  """
  attr :for, :string, default: nil
  slot :inner_block, required: true

  def label(assigns) do
    ~H"""
    <label for={@for} class="block text-sm font-semibold leading-6 text-zinc-800">
      <%= render_slot(@inner_block) %>
    </label>
    """
  end

  @doc """
  Generates a generic error message.
  """
  slot :inner_block, required: true

  def error(assigns) do
    ~H"""
    <p class="mt-3 flex gap-3 text-sm leading-6 text-rose-600">
      <.icon name="hero-exclamation-circle-mini" class="mt-0.5 h-5 w-5 flex-none" />
      <%= render_slot(@inner_block) %>
    </p>
    """
  end

  @doc """
  Renders a header with title.
  """
  attr :class, :string, default: nil

  slot :inner_block, required: true
  slot :subtitle
  slot :actions

  def header(assigns) do
    ~H"""
    <header class={[@actions != [] && "flex items-center justify-between gap-6", @class]}>
      <div>
        <h1 class="text-lg font-semibold leading-8 text-zinc-800">
          <%= render_slot(@inner_block) %>
        </h1>
        <p :if={@subtitle != []} class="mt-2 text-sm leading-6 text-zinc-600">
          <%= render_slot(@subtitle) %>
        </p>
      </div>
      <div class="flex-none"><%= render_slot(@actions) %></div>
    </header>
    """
  end

  @doc ~S"""
  Renders a table with generic styling.

  ## Examples

      <.table id="users" rows={@users}>
        <:col :let={user} label="id"><%= user.id %></:col>
        <:col :let={user} label="username"><%= user.username %></:col>
      </.table>
  """
  attr :id, :string, required: true
  attr :rows, :list, required: true
  attr :row_id, :any, default: nil, doc: "the function for generating the row id"
  attr :row_click, :any, default: nil, doc: "the function for handling phx-click on each row"

  attr :row_item, :any,
    default: &Function.identity/1,
    doc: "the function for mapping each row before calling the :col and :action slots"

  slot :col, required: true do
    attr :label, :string
  end

  slot :action, doc: "the slot for showing user actions in the last table column"

  def table(assigns) do
    assigns =
      with %{rows: %Phoenix.LiveView.LiveStream{}} <- assigns do
        assign(assigns, row_id: assigns.row_id || fn {id, _item} -> id end)
      end

    ~H"""
    <div class="overflow-y-auto px-4 sm:overflow-visible sm:px-0">
      <table class="w-[40rem] mt-11 sm:w-full">
        <thead class="text-sm text-left leading-6 text-zinc-500">
          <tr>
            <th :for={col <- @col} class="p-0 pb-4 pr-6 font-normal"><%= col[:label] %></th>
            <th :if={@action != []} class="relative p-0 pb-4">
              <span class="sr-only"><%= gettext("Actions") %></span>
            </th>
          </tr>
        </thead>
        <tbody
          id={@id}
          phx-update={match?(%Phoenix.LiveView.LiveStream{}, @rows) && "stream"}
          class="relative divide-y divide-zinc-100 border-t border-zinc-200 text-sm leading-6 text-zinc-700"
        >
          <tr :for={row <- @rows} id={@row_id && @row_id.(row)} class="group hover:bg-zinc-50">
            <td
              :for={{col, i} <- Enum.with_index(@col)}
              phx-click={@row_click && @row_click.(row)}
              class={["relative p-0", @row_click && "hover:cursor-pointer"]}
            >
              <div class="block py-4 pr-6">
                <span class="absolute -inset-y-px right-0 -left-4 group-hover:bg-zinc-50 sm:rounded-l-xl" />
                <span class={["relative", i == 0 && "font-semibold text-zinc-900"]}>
                  <%= render_slot(col, @row_item.(row)) %>
                </span>
              </div>
            </td>
            <td :if={@action != []} class="relative w-14 p-0">
              <div class="relative whitespace-nowrap py-4 text-right text-sm font-medium">
                <span class="absolute -inset-y-px -right-4 left-0 group-hover:bg-zinc-50 sm:rounded-r-xl" />
                <span
                  :for={action <- @action}
                  class="relative ml-4 font-semibold leading-6 text-zinc-900 hover:text-zinc-700"
                >
                  <%= render_slot(action, @row_item.(row)) %>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    """
  end

  @doc """
  Renders a data list.

  ## Examples

      <.list>
        <:item title="Title"><%= @post.title %></:item>
        <:item title="Views"><%= @post.views %></:item>
      </.list>
  """
  slot :item, required: true do
    attr :title, :string, required: true
  end

  def list(assigns) do
    ~H"""
    <div class="mt-14">
      <dl class="-my-4 divide-y divide-zinc-100">
        <div :for={item <- @item} class="flex gap-4 py-4 text-sm leading-6 sm:gap-8">
          <dt class="w-1/4 flex-none text-zinc-500"><%= item.title %></dt>
          <dd class="text-zinc-700"><%= render_slot(item) %></dd>
        </div>
      </dl>
    </div>
    """
  end

  @doc """
  Renders a back navigation link.

  ## Examples

      <.back navigate={~p"/posts"}>Back to posts</.back>
  """
  attr :navigate, :any, required: true
  slot :inner_block, required: true

  def back(assigns) do
    ~H"""
    <div class="mt-16">
      <.link
        navigate={@navigate}
        class="text-sm font-semibold leading-6 text-zinc-900 hover:text-zinc-700"
      >
        <.icon name="hero-arrow-left-solid" class="h-3 w-3" />
        <%= render_slot(@inner_block) %>
      </.link>
    </div>
    """
  end

  @doc """
  Renders a [Heroicon](https://heroicons.com).

  Heroicons come in three styles – outline, solid, and mini.
  By default, the outline style is used, but solid and mini may
  be applied by using the `-solid` and `-mini` suffix.

  You can customize the size and colors of the icons by setting
  width, height, and background color classes.

  Icons are extracted from the `deps/heroicons` directory and bundled within
  your compiled app.css by the plugin in your `assets/tailwind.config.js`.

  ## Examples

      <.icon name="hero-x-mark-solid" />
      <.icon name="hero-arrow-path" class="ml-1 w-3 h-3 animate-spin" />
  """
  attr :name, :string, required: true
  attr :class, :string, default: nil

  def icon(%{name: "hero-" <> _} = assigns) do
    ~H"""
    <span class={[@name, @class]} />
    """
  end

  ## JS Commands

  def show(js \\ %JS{}, selector) do
    JS.show(js,
      to: selector,
      time: 300,
      transition:
        {"transition-all transform ease-out duration-300",
         "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
         "opacity-100 translate-y-0 sm:scale-100"}
    )
  end

  def hide(js \\ %JS{}, selector) do
    JS.hide(js,
      to: selector,
      time: 200,
      transition:
        {"transition-all transform ease-in duration-200",
         "opacity-100 translate-y-0 sm:scale-100",
         "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}
    )
  end

  def show_modal(js \\ %JS{}, id) when is_binary(id) do
    js
    |> JS.show(to: "##{id}")
    |> JS.show(
      to: "##{id}-bg",
      time: 300,
      transition: {"transition-all transform ease-out duration-300", "opacity-0", "opacity-100"}
    )
    |> show("##{id}-container")
    |> JS.add_class("overflow-hidden", to: "body")
    |> JS.focus_first(to: "##{id}-content")
  end

  def hide_modal(js \\ %JS{}, id) do
    js
    |> JS.hide(
      to: "##{id}-bg",
      transition: {"transition-all transform ease-in duration-200", "opacity-100", "opacity-0"}
    )
    |> hide("##{id}-container")
    |> JS.hide(to: "##{id}", transition: {"block", "block", "hidden"})
    |> JS.remove_class("overflow-hidden", to: "body")
    |> JS.pop_focus()
  end

  @doc """
  Translates an error message using gettext.
  """
  def translate_error({msg, opts}) do
    # When using gettext, we typically pass the strings we want
    # to translate as a static argument:
    #
    #     # Translate the number of files with plural rules
    #     dngettext("errors", "1 file", "%{count} files", count)
    #
    # However the error messages in our forms and APIs are generated
    # dynamically, so we need to translate them by calling Gettext
    # with our gettext backend as first argument. Translations are
    # available in the errors.po file (as we use the "errors" domain).
    if count = opts[:count] do
      Gettext.dngettext(JrowahWeb.Gettext, "errors", msg, msg, count, opts)
    else
      Gettext.dgettext(JrowahWeb.Gettext, "errors", msg, opts)
    end
  end

  @doc """
  Translates the errors for a field from a keyword list of errors.
  """
  def translate_errors(errors, field) when is_list(errors) do
    for {^field, {msg, opts}} <- errors, do: translate_error({msg, opts})
  end

  defp main_nav_links do
    [
      %{label: "Home", unique_class: "desktop-home-link", route: ~p"/"},
      %{label: "About", unique_class: "desktop-about-link", route: ~p"/about"},
      %{
        label: "Blog",
        unique_class: "desktop-blog-link",
        route: ~p"/blog"
      },
      %{
        label: "Projects",
        unique_class: "desktop-projects-link",
        route: ~p"/projects"
      },
      %{
        label: "Journey",
        unique_class: "desktop-journey-link",
        route: ~p"/journey"
      }
    ]
  end

  defp active?(current_url, route) do
    %{path: path} = URI.parse(current_url)

    if route == "/", do: path == route, else: String.starts_with?(path, route)
  end

  defp social_links do
    [
      %{
        label: "Twitter",
        svg:
          "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class='w-6 h-6 text-content fill-current'>
      <path d=\"M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z\">
      </path>
    </svg>",
        link: "https://twitter.com/jrowah"
      },
      %{
        label: "GitHub",
        svg:
          "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class='w-6 h-6 text-content fill-current'>
      <path
        fill-rule=\"evenodd\"
        clip-rule=\"evenodd\"
        d=\"M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z\"
      >
      </path>
    </svg>",
        link: "https://github.com/rowah"
      },
      %{
        label: "LinkedIn",
        svg:
          "<svg viewBox='0 0 24 24' aria-hidden='true' class='w-6 h-6 text-content fill-current'>
      <path d='M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z'>
      </path>
    </svg>",
        link: "https://www.linkedin.com/in/james-rowa/"
      }
    ]
  end
end
