<?php

/* themes/custom/ur_connected/templates/page.html.twig */
class __TwigTemplate_d9b0fc284cc1cc6bd490bbe9a903304ec5c4296b6e56ac897abd8f5fe0caba3d extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'navbar' => [$this, 'block_navbar'],
            'main' => [$this, 'block_main'],
            'header' => [$this, 'block_header'],
            'header_wide_width' => [$this, 'block_header_wide_width'],
            'header_two_left' => [$this, 'block_header_two_left'],
            'header_two_right' => [$this, 'block_header_two_right'],
            'sidebar_first' => [$this, 'block_sidebar_first'],
            'highlighted' => [$this, 'block_highlighted'],
            'help' => [$this, 'block_help'],
            'content' => [$this, 'block_content'],
            'sidebar_second' => [$this, 'block_sidebar_second'],
            'content_block_left' => [$this, 'block_content_block_left'],
            'content_block_right' => [$this, 'block_content_block_right'],
            'structured_content' => [$this, 'block_structured_content'],
            'footer' => [$this, 'block_footer'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $tags = ["set" => 54, "if" => 58, "block" => 59];
        $filters = ["clean_class" => 64, "t" => 76];
        $functions = [];

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                ['set', 'if', 'block'],
                ['clean_class', 't'],
                []
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 54
        $context["container"] = (($this->getAttribute($this->getAttribute(($context["theme"] ?? null), "settings", []), "fluid_container", [])) ? ("container-fluid") : ("container"));
        // line 55
        echo "

";
        // line 58
        if (($this->getAttribute(($context["page"] ?? null), "navigation", []) || $this->getAttribute(($context["page"] ?? null), "navigation_collapsible", []))) {
            // line 59
            echo "    ";
            $this->displayBlock('navbar', $context, $blocks);
        }
        // line 97
        echo "


";
        // line 101
        $this->displayBlock('main', $context, $blocks);
        // line 194
        echo "
";
        // line 195
        if ($this->getAttribute(($context["page"] ?? null), "content_block_left", [])) {
            // line 196
            echo "    ";
            $this->displayBlock('content_block_left', $context, $blocks);
        }
        // line 202
        echo "
";
        // line 203
        if ($this->getAttribute(($context["page"] ?? null), "content_block_right", [])) {
            // line 204
            echo "    ";
            $this->displayBlock('content_block_right', $context, $blocks);
        }
        // line 210
        echo "
";
        // line 211
        if ($this->getAttribute(($context["page"] ?? null), "structured_content", [])) {
            // line 212
            echo "    ";
            $this->displayBlock('structured_content', $context, $blocks);
        }
        // line 218
        echo "
";
        // line 219
        if ($this->getAttribute(($context["page"] ?? null), "footer", [])) {
            // line 220
            echo "    ";
            $this->displayBlock('footer', $context, $blocks);
        }
    }

    // line 59
    public function block_navbar($context, array $blocks = [])
    {
        // line 60
        echo "        ";
        // line 61
        $context["navbar_classes"] = [0 => "navbar", 1 => (($this->getAttribute($this->getAttribute(        // line 63
($context["theme"] ?? null), "settings", []), "navbar_inverse", [])) ? ("navbar-inverse") : ("navbar-default")), 2 => (($this->getAttribute($this->getAttribute(        // line 64
($context["theme"] ?? null), "settings", []), "navbar_position", [])) ? (("navbar-" . \Drupal\Component\Utility\Html::getClass($this->getAttribute($this->getAttribute(($context["theme"] ?? null), "settings", []), "navbar_position", [])))) : (($context["container"] ?? null)))];
        // line 67
        echo "        <header";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["navbar_attributes"] ?? null), "addClass", [0 => ($context["navbar_classes"] ?? null)], "method"), "html", null, true));
        echo " id=\"navbar\" role=\"banner\">
            ";
        // line 68
        if ( !$this->getAttribute(($context["navbar_attributes"] ?? null), "hasClass", [0 => ($context["container"] ?? null)], "method")) {
            // line 69
            echo "            <div class=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["container"] ?? null), "html", null, true));
            echo "\">
                ";
        }
        // line 71
        echo "                <div class=\"navbar-header\">
                    ";
        // line 72
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "navigation", []), "html", null, true));
        echo "
                    ";
        // line 74
        echo "                    ";
        if ($this->getAttribute(($context["page"] ?? null), "navigation_collapsible", [])) {
            // line 75
            echo "                        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">
                            <span class=\"sr-only\">";
            // line 76
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Toggle navigation")));
            echo "</span>
                            <span class=\"icon-bar\"></span>
                            <span class=\"icon-bar\"></span>
                            <span class=\"icon-bar\"></span>
                        </button>
                    ";
        }
        // line 82
        echo "                </div>


                ";
        // line 86
        echo "                ";
        if ($this->getAttribute(($context["page"] ?? null), "navigation_collapsible", [])) {
            // line 87
            echo "                    <div id=\"navbar-collapse\" class=\"navbar-collapse collapse\">
                        ";
            // line 88
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "navigation_collapsible", []), "html", null, true));
            echo "
                    </div>
                ";
        }
        // line 91
        echo "                ";
        if ( !$this->getAttribute(($context["navbar_attributes"] ?? null), "hasClass", [0 => ($context["container"] ?? null)], "method")) {
            // line 92
            echo "            </div>
            ";
        }
        // line 94
        echo "        </header>
    ";
    }

    // line 101
    public function block_main($context, array $blocks = [])
    {
        // line 102
        echo "    <div role=\"main\" class=\"main-container ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["container"] ?? null), "html", null, true));
        echo " js-quickedit-main-content\">
        <div class=\"row\">

            ";
        // line 106
        echo "            ";
        if ($this->getAttribute(($context["page"] ?? null), "header", [])) {
            // line 107
            echo "                ";
            $this->displayBlock('header', $context, $blocks);
            // line 112
            echo "            ";
        }
        // line 113
        echo "
            ";
        // line 114
        if ($this->getAttribute(($context["page"] ?? null), "header_wide_width", [])) {
            // line 115
            echo "                ";
            $this->displayBlock('header_wide_width', $context, $blocks);
            // line 120
            echo "            ";
        }
        // line 121
        echo "
            ";
        // line 123
        echo "            ";
        if ($this->getAttribute(($context["page"] ?? null), "header_two_left", [])) {
            // line 124
            echo "                ";
            $this->displayBlock('header_two_left', $context, $blocks);
            // line 129
            echo "            ";
        }
        // line 130
        echo "
            ";
        // line 132
        echo "
            ";
        // line 133
        if ($this->getAttribute(($context["page"] ?? null), "header_two_right", [])) {
            // line 134
            echo "                ";
            $this->displayBlock('header_two_right', $context, $blocks);
            // line 139
            echo "            ";
        }
        // line 140
        echo "

            ";
        // line 143
        echo "            ";
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_first", [])) {
            // line 144
            echo "                ";
            $this->displayBlock('sidebar_first', $context, $blocks);
            // line 149
            echo "            ";
        }
        // line 150
        echo "
            ";
        // line 152
        echo "            ";
        // line 153
        $context["content_classes"] = [0 => ((($this->getAttribute(        // line 154
($context["page"] ?? null), "sidebar_first", []) && $this->getAttribute(($context["page"] ?? null), "sidebar_second", []))) ? ("col-sm-6") : ("")), 1 => ((($this->getAttribute(        // line 155
($context["page"] ?? null), "sidebar_first", []) && twig_test_empty($this->getAttribute(($context["page"] ?? null), "sidebar_second", [])))) ? ("col-sm-9") : ("")), 2 => ((($this->getAttribute(        // line 156
($context["page"] ?? null), "sidebar_second", []) && twig_test_empty($this->getAttribute(($context["page"] ?? null), "sidebar_first", [])))) ? ("col-sm-9") : ("")), 3 => (((twig_test_empty($this->getAttribute(        // line 157
($context["page"] ?? null), "sidebar_first", [])) && twig_test_empty($this->getAttribute(($context["page"] ?? null), "sidebar_second", [])))) ? ("col-sm-12") : (""))];
        // line 160
        echo "            <section";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content_attributes"] ?? null), "addClass", [0 => ($context["content_classes"] ?? null)], "method"), "html", null, true));
        echo ">

                ";
        // line 163
        echo "                ";
        if ($this->getAttribute(($context["page"] ?? null), "highlighted", [])) {
            // line 164
            echo "                    ";
            $this->displayBlock('highlighted', $context, $blocks);
            // line 167
            echo "                ";
        }
        // line 168
        echo "
                ";
        // line 170
        echo "                ";
        if ($this->getAttribute(($context["page"] ?? null), "help", [])) {
            // line 171
            echo "                    ";
            $this->displayBlock('help', $context, $blocks);
            // line 174
            echo "                ";
        }
        // line 175
        echo "
                ";
        // line 177
        echo "                ";
        $this->displayBlock('content', $context, $blocks);
        // line 181
        echo "            </section>

            ";
        // line 184
        echo "            ";
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_second", [])) {
            // line 185
            echo "                ";
            $this->displayBlock('sidebar_second', $context, $blocks);
            // line 190
            echo "            ";
        }
        // line 191
        echo "        </div>
    </div>
";
    }

    // line 107
    public function block_header($context, array $blocks = [])
    {
        // line 108
        echo "                    <div class=\"col-sm-12\" role=\"heading\">
                        ";
        // line 109
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "header", []), "html", null, true));
        echo "
                    </div>
                ";
    }

    // line 115
    public function block_header_wide_width($context, array $blocks = [])
    {
        // line 116
        echo "                    <div class=\"headerWideWidth\" role=\"heading\">
                        ";
        // line 117
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "header_wide_width", []), "html", null, true));
        echo "
                    </div>
                ";
    }

    // line 124
    public function block_header_two_left($context, array $blocks = [])
    {
        // line 125
        echo "                    <div class=\"col-sm-4 header_two_left\" role=\"heading\">
                        ";
        // line 126
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "header_two_left", []), "html", null, true));
        echo "
                    </div>
                ";
    }

    // line 134
    public function block_header_two_right($context, array $blocks = [])
    {
        // line 135
        echo "                    <div class=\"col-sm-8\" role=\"heading\">
                        ";
        // line 136
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "header_two_right", []), "html", null, true));
        echo "
                    </div>
                ";
    }

    // line 144
    public function block_sidebar_first($context, array $blocks = [])
    {
        // line 145
        echo "                    <aside class=\"col-sm-3\" role=\"complementary\">
                        ";
        // line 146
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_first", []), "html", null, true));
        echo "
                    </aside>
                ";
    }

    // line 164
    public function block_highlighted($context, array $blocks = [])
    {
        // line 165
        echo "                        <div class=\"highlighted\">";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "highlighted", []), "html", null, true));
        echo "</div>
                    ";
    }

    // line 171
    public function block_help($context, array $blocks = [])
    {
        // line 172
        echo "                        ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "help", []), "html", null, true));
        echo "
                    ";
    }

    // line 177
    public function block_content($context, array $blocks = [])
    {
        // line 178
        echo "                    <a id=\"main-content\"></a>
                    ";
        // line 179
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", []), "html", null, true));
        echo "
                ";
    }

    // line 185
    public function block_sidebar_second($context, array $blocks = [])
    {
        // line 186
        echo "                    <aside class=\"col-sm-3\" role=\"complementary\">
                        ";
        // line 187
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_second", []), "html", null, true));
        echo "
                    </aside>
                ";
    }

    // line 196
    public function block_content_block_left($context, array $blocks = [])
    {
        // line 197
        echo "        <div class=\"col-sm-6\" role=\"content_block_left\">
            ";
        // line 198
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content_block_left", []), "html", null, true));
        echo "
        </div>
    ";
    }

    // line 204
    public function block_content_block_right($context, array $blocks = [])
    {
        // line 205
        echo "        <div class=\"col-sm-6\" role=\"content_block_right\">
            ";
        // line 206
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content_block_right", []), "html", null, true));
        echo "
        </div>
    ";
    }

    // line 212
    public function block_structured_content($context, array $blocks = [])
    {
        // line 213
        echo "        <div class=\"structured-content container\">
            ";
        // line 214
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "structured_content", []), "html", null, true));
        echo "
        </div>
    ";
    }

    // line 220
    public function block_footer($context, array $blocks = [])
    {
        // line 221
        echo "        <footer class=\"footer ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["container"] ?? null), "html", null, true));
        echo "\" role=\"contentinfo\">
            ";
        // line 222
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer", []), "html", null, true));
        echo "
        </footer>
    ";
    }

    public function getTemplateName()
    {
        return "themes/custom/ur_connected/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  477 => 222,  472 => 221,  469 => 220,  462 => 214,  459 => 213,  456 => 212,  449 => 206,  446 => 205,  443 => 204,  436 => 198,  433 => 197,  430 => 196,  423 => 187,  420 => 186,  417 => 185,  411 => 179,  408 => 178,  405 => 177,  398 => 172,  395 => 171,  388 => 165,  385 => 164,  378 => 146,  375 => 145,  372 => 144,  365 => 136,  362 => 135,  359 => 134,  352 => 126,  349 => 125,  346 => 124,  339 => 117,  336 => 116,  333 => 115,  326 => 109,  323 => 108,  320 => 107,  314 => 191,  311 => 190,  308 => 185,  305 => 184,  301 => 181,  298 => 177,  295 => 175,  292 => 174,  289 => 171,  286 => 170,  283 => 168,  280 => 167,  277 => 164,  274 => 163,  268 => 160,  266 => 157,  265 => 156,  264 => 155,  263 => 154,  262 => 153,  260 => 152,  257 => 150,  254 => 149,  251 => 144,  248 => 143,  244 => 140,  241 => 139,  238 => 134,  236 => 133,  233 => 132,  230 => 130,  227 => 129,  224 => 124,  221 => 123,  218 => 121,  215 => 120,  212 => 115,  210 => 114,  207 => 113,  204 => 112,  201 => 107,  198 => 106,  191 => 102,  188 => 101,  183 => 94,  179 => 92,  176 => 91,  170 => 88,  167 => 87,  164 => 86,  159 => 82,  150 => 76,  147 => 75,  144 => 74,  140 => 72,  137 => 71,  131 => 69,  129 => 68,  124 => 67,  122 => 64,  121 => 63,  120 => 61,  118 => 60,  115 => 59,  109 => 220,  107 => 219,  104 => 218,  100 => 212,  98 => 211,  95 => 210,  91 => 204,  89 => 203,  86 => 202,  82 => 196,  80 => 195,  77 => 194,  75 => 101,  70 => 97,  66 => 59,  64 => 58,  60 => 55,  58 => 54,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{#
/**
 * @file
 * Default theme implementation to display a single page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.html.twig template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - base_path: The base URL path of the Drupal installation. Will usually be
 *   \"/\" unless you have installed Drupal in a sub-directory.
 * - is_front: A flag indicating if the current page is the front page.
 * - logged_in: A flag indicating if the user is registered and signed in.
 * - is_admin: A flag indicating if the user has permission to access
 *   administration pages.
 *
 * Site identity:
 * - front_page: The URL of the front page. Use this instead of base_path when
 *   linking to the front page. This includes the language domain or prefix.
 *
 * Page content (in order of occurrence in the default page.html.twig):
 * - title_prefix: Additional output populated by modules, intended to be
 *   displayed in front of the main title tag that appears in the template.
 * - title: The page title, for use in the actual content.
 * - title_suffix: Additional output populated by modules, intended to be
 *   displayed after the main title tag that appears in the template.
 * - messages: Status and error messages. Should be displayed prominently.
 * - tabs: Tabs linking to any sub-pages beneath the current page (e.g., the
 *   view and edit tabs when displaying a node).
 * - node: Fully loaded node, if there is an automatically-loaded node
 *   associated with the page and the node ID is the second argument in the
 *   page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - page.header: Items for the header region.
 * - page.navigation: Items for the navigation region.
 * - page.navigation_collapsible: Items for the navigation (collapsible) region.
 * - page.highlighted: Items for the highlighted content region.
 * - page.help: Dynamic help text, mostly for admin pages.
 * - page.content: The main content of the current page.
 * - page.sidebar_first: Items for the first sidebar.
 * - page.sidebar_second: Items for the second sidebar.
 * - page.footer: Items for the footer region.
 *
 * @ingroup templates
 *
 * @see template_preprocess_page()
 * @see html.html.twig
 */
#}
{% set container = theme.settings.fluid_container ? 'container-fluid' : 'container' %}


{# Navbar #}
{% if page.navigation or page.navigation_collapsible %}
    {% block navbar %}
        {%
            set navbar_classes = [
            'navbar',
            theme.settings.navbar_inverse ? 'navbar-inverse' : 'navbar-default',
            theme.settings.navbar_position ? 'navbar-' ~ theme.settings.navbar_position|clean_class : container,
        ]
        %}
        <header{{ navbar_attributes.addClass(navbar_classes) }} id=\"navbar\" role=\"banner\">
            {% if not navbar_attributes.hasClass(container) %}
            <div class=\"{{ container }}\">
                {% endif %}
                <div class=\"navbar-header\">
                    {{ page.navigation }}
                    {# .btn-navbar is used as the toggle for collapsed navbar content #}
                    {% if page.navigation_collapsible %}
                        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">
                            <span class=\"sr-only\">{{ 'Toggle navigation'|t }}</span>
                            <span class=\"icon-bar\"></span>
                            <span class=\"icon-bar\"></span>
                            <span class=\"icon-bar\"></span>
                        </button>
                    {% endif %}
                </div>


                {# Navigation (collapsible) #}
                {% if page.navigation_collapsible %}
                    <div id=\"navbar-collapse\" class=\"navbar-collapse collapse\">
                        {{ page.navigation_collapsible }}
                    </div>
                {% endif %}
                {% if not navbar_attributes.hasClass(container) %}
            </div>
            {% endif %}
        </header>
    {% endblock %}
{% endif %}



{# Main #}
{% block main %}
    <div role=\"main\" class=\"main-container {{ container }} js-quickedit-main-content\">
        <div class=\"row\">

            {# Header #}
            {% if page.header %}
                {% block header %}
                    <div class=\"col-sm-12\" role=\"heading\">
                        {{ page.header }}
                    </div>
                {% endblock %}
            {% endif %}

            {% if page.header_wide_width %}
                {% block header_wide_width %}
                    <div class=\"headerWideWidth\" role=\"heading\">
                        {{ page.header_wide_width }}
                    </div>
                {% endblock %}
            {% endif %}

            {# Header Two Left #}
            {% if page.header_two_left %}
                {% block header_two_left %}
                    <div class=\"col-sm-4 header_two_left\" role=\"heading\">
                        {{ page.header_two_left }}
                    </div>
                {% endblock %}
            {% endif %}

            {# Header Two Right #}

            {% if page.header_two_right %}
                {% block header_two_right %}
                    <div class=\"col-sm-8\" role=\"heading\">
                        {{ page.header_two_right }}
                    </div>
                {% endblock %}
            {% endif %}


            {# Sidebar First #}
            {% if page.sidebar_first %}
                {% block sidebar_first %}
                    <aside class=\"col-sm-3\" role=\"complementary\">
                        {{ page.sidebar_first }}
                    </aside>
                {% endblock %}
            {% endif %}

            {# Content #}
            {%
                set content_classes = [
                page.sidebar_first and page.sidebar_second ? 'col-sm-6',
                page.sidebar_first and page.sidebar_second is empty ? 'col-sm-9',
                page.sidebar_second and page.sidebar_first is empty ? 'col-sm-9',
                page.sidebar_first is empty and page.sidebar_second is empty ? 'col-sm-12'
            ]
            %}
            <section{{ content_attributes.addClass(content_classes) }}>

                {# Highlighted #}
                {% if page.highlighted %}
                    {% block highlighted %}
                        <div class=\"highlighted\">{{ page.highlighted }}</div>
                    {% endblock %}
                {% endif %}

                {# Help #}
                {% if page.help %}
                    {% block help %}
                        {{ page.help }}
                    {% endblock %}
                {% endif %}

                {# Content #}
                {% block content %}
                    <a id=\"main-content\"></a>
                    {{ page.content }}
                {% endblock %}
            </section>

            {# Sidebar Second #}
            {% if page.sidebar_second %}
                {% block sidebar_second %}
                    <aside class=\"col-sm-3\" role=\"complementary\">
                        {{ page.sidebar_second }}
                    </aside>
                {% endblock %}
            {% endif %}
        </div>
    </div>
{% endblock %}

{% if page.content_block_left %}
    {% block content_block_left %}
        <div class=\"col-sm-6\" role=\"content_block_left\">
            {{ page.content_block_left }}
        </div>
    {% endblock %}
{% endif %}

{% if page.content_block_right %}
    {% block content_block_right %}
        <div class=\"col-sm-6\" role=\"content_block_right\">
            {{ page.content_block_right }}
        </div>
    {% endblock %}
{% endif %}

{% if page.structured_content %}
    {% block structured_content %}
        <div class=\"structured-content container\">
            {{ page.structured_content }}
        </div>
    {% endblock %}
{% endif %}

{% if page.footer %}
    {% block footer %}
        <footer class=\"footer {{ container }}\" role=\"contentinfo\">
            {{ page.footer }}
        </footer>
    {% endblock %}
{% endif %}
", "themes/custom/ur_connected/templates/page.html.twig", "/Applications/MAMP/ur-connected/themes/custom/ur_connected/templates/page.html.twig");
    }
}
