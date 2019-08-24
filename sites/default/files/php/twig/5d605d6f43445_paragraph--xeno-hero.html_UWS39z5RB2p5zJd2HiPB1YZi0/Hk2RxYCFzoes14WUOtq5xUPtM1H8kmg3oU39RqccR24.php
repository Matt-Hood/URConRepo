<?php

/* modules/custom/xeno_hero/templates/paragraph--xeno-hero.html.twig */
class __TwigTemplate_3f293d5849ede3594c4bea87c35dba7ae91483f070d1b4eca8283bc622090e47 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $tags = ["set" => 51, "if" => 60];
        $filters = ["clean_class" => 53, "render" => 60, "merge" => 110, "without" => 141];
        $functions = ["attach_library" => 47];

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'render', 'merge', 'without'],
                ['attach_library']
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

        // line 46
        echo "
";
        // line 47
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("xeno_hero/xeno-hero"), "html", null, true));
        echo "

";
        // line 51
        $context["classes"] = [0 => "paragraph", 1 => ("paragraph--type--" . \Drupal\Component\Utility\Html::getClass($this->getAttribute(        // line 53
($context["paragraph"] ?? null), "bundle", []))), 2 => ((        // line 54
($context["view_mode"] ?? null)) ? (("paragraph--view-mode--" . \Drupal\Component\Utility\Html::getClass(($context["view_mode"] ?? null)))) : (""))];
        // line 57
        echo "
";
        // line 60
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["content"] ?? null), "xeno_overlay", []))) {
            // line 61
            echo "  ";
            $context["overlay_level"] = $this->getAttribute($this->getAttribute($this->getAttribute(($context["content"] ?? null), "xeno_overlay", []), "#items", [], "array"), "getString", [], "method");
            // line 62
            echo "  ";
            $context["overlay_levels"] = [0 => ((("1" ==             // line 63
($context["overlay_level"] ?? null))) ? ("1") : ("")), 1 => ((("2" ==             // line 64
($context["overlay_level"] ?? null))) ? ("2") : ("")), 2 => ((("3" ==             // line 65
($context["overlay_level"] ?? null))) ? ("3") : ("")), 3 => ((("4" ==             // line 66
($context["overlay_level"] ?? null))) ? ("4") : ("")), 4 => ((("5" ==             // line 67
($context["overlay_level"] ?? null))) ? ("5") : ("")), 5 => ((("6" ==             // line 68
($context["overlay_level"] ?? null))) ? ("6") : ("")), 6 => ((("7" ==             // line 69
($context["overlay_level"] ?? null))) ? ("7") : ("")), 7 => ((("8" ==             // line 70
($context["overlay_level"] ?? null))) ? ("8") : ("")), 8 => ((("9" ==             // line 71
($context["overlay_level"] ?? null))) ? ("9") : (""))];
        }
        // line 75
        echo "
";
        // line 78
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["content"] ?? null), "xeno_parallax", []))) {
            // line 79
            echo "  ";
            $context["parallax_speed"] = $this->getAttribute($this->getAttribute($this->getAttribute(($context["content"] ?? null), "xeno_parallax", []), "#items", [], "array"), "getString", [], "method");
            // line 80
            echo "  ";
            $context["parallax_speeds"] = [0 => ((("1" ==             // line 81
($context["parallax_speed"] ?? null))) ? ("1") : ("")), 1 => ((("2" ==             // line 82
($context["parallax_speed"] ?? null))) ? ("2") : ("")), 2 => ((("3" ==             // line 83
($context["parallax_speed"] ?? null))) ? ("3") : ("")), 3 => ((("4" ==             // line 84
($context["parallax_speed"] ?? null))) ? ("4") : ("")), 4 => ((("5" ==             // line 85
($context["parallax_speed"] ?? null))) ? ("5") : ("")), 5 => ((("6" ==             // line 86
($context["parallax_speed"] ?? null))) ? ("6") : (""))];
        }
        // line 90
        echo "
";
        // line 93
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["content"] ?? null), "xeno_offset", []))) {
            // line 94
            echo "  ";
            $context["parallax_offset"] = $this->getAttribute($this->getAttribute($this->getAttribute(($context["content"] ?? null), "xeno_offset", []), "#items", [], "array"), "getString", [], "method");
        }
        // line 96
        echo "
";
        // line 99
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["content"] ?? null), "xeno_invert", []))) {
            // line 100
            echo "  ";
            $context["invert_level"] = $this->getAttribute($this->getAttribute($this->getAttribute(($context["content"] ?? null), "xeno_invert", []), "#items", [], "array"), "getString", [], "method");
            // line 101
            echo "  ";
            $context["invert_levels"] = [0 => ((("invert" ==             // line 102
($context["invert_level"] ?? null))) ? ("paragraph--overlay--invert") : (""))];
        }
        // line 106
        echo "
";
        // line 108
        $context["invert_field"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["content"] ?? null), "xeno_invert", []));
        // line 109
        if (($context["invert_field"] ?? null)) {
            // line 110
            echo "  ";
            $context["classes"] = twig_array_merge(($context["classes"] ?? null), ($context["invert_levels"] ?? null));
        }
        // line 112
        echo "
";
        // line 115
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["content"] ?? null), "xeno_zoom", []))) {
            // line 116
            echo "  ";
            $context["zoom_level"] = $this->getAttribute($this->getAttribute($this->getAttribute(($context["content"] ?? null), "xeno_zoom", []), "#items", [], "array"), "getString", [], "method");
            // line 117
            echo "  ";
            $context["zoom_levels"] = [0 => ((("1" ==             // line 118
($context["zoom_level"] ?? null))) ? ("paragraph--zoom paragraph--zoom--1") : ("")), 1 => ((("2" ==             // line 119
($context["zoom_level"] ?? null))) ? ("paragraph--zoom paragraph--zoom--2") : ("")), 2 => ((("3" ==             // line 120
($context["zoom_level"] ?? null))) ? ("paragraph--zoom paragraph--zoom--3") : ("")), 3 => ((("4" ==             // line 121
($context["zoom_level"] ?? null))) ? ("paragraph--zoom paragraph--zoom--4") : ("")), 4 => ((("5" ==             // line 122
($context["zoom_level"] ?? null))) ? ("paragraph--zoom paragraph--zoom--5") : ("")), 5 => ((("6" ==             // line 123
($context["zoom_level"] ?? null))) ? ("paragraph--zoom paragraph--zoom--6") : (""))];
            // line 126
            echo " ";
        }
        // line 127
        echo "
";
        // line 129
        $context["zoom_field"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["content"] ?? null), "xeno_zoom", []));
        // line 130
        if (($context["zoom_field"] ?? null)) {
            // line 131
            echo "  ";
            $context["classes"] = twig_array_merge(($context["classes"] ?? null), ($context["zoom_levels"] ?? null));
        }
        // line 133
        echo "
";
        // line 135
        echo "<div";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method"), "setAttribute", [0 => "data-overlay", 1 => ($context["overlay_levels"] ?? null)], "method"), "setAttribute", [0 => "data-speed", 1 => ($context["parallax_speeds"] ?? null)], "method"), "setAttribute", [0 => "data-offset", 1 => ($context["parallax_offset"] ?? null)], "method"), "html", null, true));
        echo ">
  ";
        // line 136
        if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["content"] ?? null), "xeno_background_image", []))) {
            // line 137
            echo "    <div class=\"paragraph--type--xeno-hero__image\">
      ";
            // line 138
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content"] ?? null), "xeno_background_image", []), "html", null, true));
            echo "
    </div>
  ";
        }
        // line 141
        echo "  ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_without(($context["content"] ?? null), "xeno_background_image", "xeno_invert", "xeno_offset", "xeno_overlay", "xeno_parallax"), "html", null, true));
        echo "
</div>
";
    }

    public function getTemplateName()
    {
        return "modules/custom/xeno_hero/templates/paragraph--xeno-hero.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  177 => 141,  171 => 138,  168 => 137,  166 => 136,  161 => 135,  158 => 133,  154 => 131,  152 => 130,  150 => 129,  147 => 127,  144 => 126,  142 => 123,  141 => 122,  140 => 121,  139 => 120,  138 => 119,  137 => 118,  135 => 117,  132 => 116,  130 => 115,  127 => 112,  123 => 110,  121 => 109,  119 => 108,  116 => 106,  113 => 102,  111 => 101,  108 => 100,  106 => 99,  103 => 96,  99 => 94,  97 => 93,  94 => 90,  91 => 86,  90 => 85,  89 => 84,  88 => 83,  87 => 82,  86 => 81,  84 => 80,  81 => 79,  79 => 78,  76 => 75,  73 => 71,  72 => 70,  71 => 69,  70 => 68,  69 => 67,  68 => 66,  67 => 65,  66 => 64,  65 => 63,  63 => 62,  60 => 61,  58 => 60,  55 => 57,  53 => 54,  52 => 53,  51 => 51,  46 => 47,  43 => 46,);
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
 * Default theme implementation to display the Xeno Hero Paragraphs bundle.
 *
 * Available variables:
 * - paragraph: Full paragraph entity.
 *   - id: The paragraph ID.
 *   - bundle: The type of the paragraph, for example, \"image\" or \"text\".
 *   - authorid: The user ID of the paragraph author.
 *   - createdtime: Formatted creation date. Preprocess functions can
 *     reformat it by calling format_date() with the desired parameters on
 *     \$variables['paragraph']->getCreatedTime().
 * - content: All paragraph items. Use {{ content }} to print them all,
 *   or print a subset such as {{ content.field_example }}. Use
 *   {{ content|without('field_example') }} to temporarily suppress the printing
 *   of a given child element.
 * - attributes: HTML attributes for the containing element.
 *   The attributes.class element may contain one or more of the following
 *   classes:
 *   - paragraphs: The current template type (also known as a \"theming hook\").
 *   - paragraphs--type-[type]: The current paragraphs type. For example, if the paragraph is an
 *     \"Image\" it would result in \"paragraphs--type--image\". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - paragraphs--view-mode--[view_mode]: The View Mode of the paragraph; for example, a
 *     preview would result in: \"paragraphs--view-mode--preview\", and
 *     default: \"paragraphs--view-mode--default\".
 * - view_mode: View mode; for example, \"preview\" or \"full\".
 * - logged_in: Flag for authenticated user status. Will be true when the
 *   current user is a logged-in member.
 * - is_admin: Flag for admin user status. Will be true when the current user
 *   is an administrator.
 *
 * Fields:
 * - xeno_background_image: Image field
 * - xeno_content: Paragraphs field
 * - xeno_invert: A select list with one option.
 * - xeno_overlay A select list with multiple options.
 * - xeno_parallax A select list with one option.
 *
 * @see template_preprocess_paragraph()
 *
 * @ingroup themeable
 */
#}

{{ attach_library('xeno_hero/xeno-hero') }}

{# The template default set classes. #}
{%
set classes = [
'paragraph',
'paragraph--type--' ~ paragraph.bundle|clean_class,
view_mode ? 'paragraph--view-mode--' ~ view_mode|clean_class,
]
%}

{# Renders Overlay field. #}
{# Sets data attibute value from values in database. #}
{% if content.xeno_overlay|render %}
  {% set overlay_level = content.xeno_overlay['#items'].getString() %}
  {% set overlay_levels = [
    '1' == overlay_level ? '1',
    '2' == overlay_level ? '2',
    '3' == overlay_level ? '3',
    '4' == overlay_level ? '4',
    '5' == overlay_level ? '5',
    '6' == overlay_level ? '6',
    '7' == overlay_level ? '7',
    '8' == overlay_level ? '8',
    '9' == overlay_level ? '9',
  ]
  %}
{% endif %}

{# Renders Parallax field. #}
{# Sets data attibute value from values in database. #}
{% if content.xeno_parallax|render %}
  {% set parallax_speed = content.xeno_parallax['#items'].getString() %}
  {% set parallax_speeds = [
    '1' == parallax_speed ? '1',
    '2' == parallax_speed ? '2',
    '3' == parallax_speed ? '3',
    '4' == parallax_speed ? '4',
    '5' == parallax_speed ? '5',
    '6' == parallax_speed ? '6',
  ]
  %}
{% endif %}

{# Renders Parallax Offset field. #}
{# Sets data attibute value from user input. #}
{% if content.xeno_offset|render %}
  {% set parallax_offset = content.xeno_offset['#items'].getString() %}
{% endif %}

{# Renders Invert field. #}
{# Sets class from values in database. #}
{% if content.xeno_invert|render %}
  {% set invert_level = content.xeno_invert['#items'].getString() %}
  {% set invert_levels = [
    'invert' == invert_level ? 'paragraph--overlay--invert',
  ]
  %}
{% endif %}

{# Merges Invert field with classes. #}
{% set invert_field = content.xeno_invert|render %}
{% if invert_field %}
  {% set classes = classes|merge(invert_levels) %}
{% endif %}

{# Renders Zoom field. #}
{# Sets class from values in database. #}
{% if content.xeno_zoom|render %}
  {% set zoom_level = content.xeno_zoom['#items'].getString() %}
  {% set zoom_levels = [
    '1' == zoom_level ? 'paragraph--zoom paragraph--zoom--1',
    '2' == zoom_level ? 'paragraph--zoom paragraph--zoom--2',
    '3' == zoom_level ? 'paragraph--zoom paragraph--zoom--3',
    '4' == zoom_level ? 'paragraph--zoom paragraph--zoom--4',
    '5' == zoom_level ? 'paragraph--zoom paragraph--zoom--5',
    '6' == zoom_level ? 'paragraph--zoom paragraph--zoom--6',
    ]
  %}
 {% endif %}

{# Merges Zoom field with classes. #}
{% set zoom_field = content.xeno_zoom|render %}
{% if zoom_field %}
  {% set classes = classes|merge(zoom_levels) %}
{% endif %}

{# Prints div with classes, & content w/o img/invert/overlay/parallax fields. #}
<div{{ attributes.addClass(classes).setAttribute('data-overlay', overlay_levels).setAttribute('data-speed', parallax_speeds).setAttribute('data-offset', parallax_offset) }}>
  {% if content.xeno_background_image|render %}
    <div class=\"paragraph--type--xeno-hero__image\">
      {{ content.xeno_background_image }}
    </div>
  {% endif %}
  {{ content|without('xeno_background_image', 'xeno_invert', 'xeno_offset', 'xeno_overlay', 'xeno_parallax') }}
</div>
", "modules/custom/xeno_hero/templates/paragraph--xeno-hero.html.twig", "/Applications/MAMP/ur-connected/modules/custom/xeno_hero/templates/paragraph--xeno-hero.html.twig");
    }
}
