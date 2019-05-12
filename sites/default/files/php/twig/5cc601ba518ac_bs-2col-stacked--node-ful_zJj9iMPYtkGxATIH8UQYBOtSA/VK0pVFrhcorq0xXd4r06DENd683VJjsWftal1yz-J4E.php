<?php

/* themes/custom/ur_connected/templates/bs-2col-stacked--node-full.html.twig */
class __TwigTemplate_b6859761417afc10d3fede0e991e96aad387638837deb0011698dc016463a7fc extends Twig_Template
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
        $tags = ["if" => 25];
        $filters = [];
        $functions = [];

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                ['if'],
                [],
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

        // line 22
        echo "<";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["wrapper"] ?? null), "html", null, true));
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["attributes"] ?? null), "html", null, true));
        echo ">
  ";
        // line 23
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["title_suffix"] ?? null), "contextual_links", []), "html", null, true));
        echo "

  ";
        // line 25
        if ($this->getAttribute(($context["top"] ?? null), "content", [])) {
            // line 26
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top"] ?? null), "attributes", []), "html", null, true));
            echo ">
    ";
            // line 27
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top"] ?? null), "content", []), "html", null, true));
            echo "
  </";
            // line 28
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 30
        echo "
  ";
        // line 31
        if ($this->getAttribute(($context["left"] ?? null), "content", [])) {
            // line 32
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["left"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["left"] ?? null), "attributes", []), "html", null, true));
            echo ">
    <h1>";
            // line 33
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["left"] ?? null), "content", []), "field_event_name", []), "html", null, true));
            echo " </h1>
<div class = \"flex-event-info\" >
    ";
            // line 35
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["right"] ?? null), "content", []), "field_company_name", []), "html", null, true));
            echo " |
    ";
            // line 36
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["right"] ?? null), "content", []), "field_date", []), "html", null, true));
            echo " |
    ";
            // line 37
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["right"] ?? null), "content", []), "field_cost", []), "html", null, true));
            echo "
</div>
    <h1>Description</h1>
    ";
            // line 40
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["left"] ?? null), "content", []), "body", []), "html", null, true));
            echo "
  </";
            // line 41
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["left"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 43
        echo "
  ";
        // line 44
        if ($this->getAttribute(($context["right"] ?? null), "content", [])) {
            // line 45
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["right"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["right"] ?? null), "attributes", []), "html", null, true));
            echo ">
    <div class = \"big-button\">";
            // line 46
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["right"] ?? null), "content", []), "field_rsvp_now", []), "html", null, true));
            echo "</div>
<h1>Details </h1>
<div class = \"details-container\">
    ";
            // line 49
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["right"] ?? null), "content", []), "field_company_name", []), "html", null, true));
            echo "
    ";
            // line 50
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["right"] ?? null), "content", []), "field_date", []), "html", null, true));
            echo "
    ";
            // line 51
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["right"] ?? null), "content", []), "field_cost", []), "html", null, true));
            echo "
    ";
            // line 52
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["right"] ?? null), "content", []), "field_category", []), "html", null, true));
            echo "
    ";
            // line 53
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["right"] ?? null), "content", []), "field_location", []), "html", null, true));
            echo "
</div>
  </";
            // line 55
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["right"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 57
        echo "
  ";
        // line 58
        if ($this->getAttribute(($context["bottom"] ?? null), "content", [])) {
            // line 59
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom"] ?? null), "attributes", []), "html", null, true));
            echo ">
    <div class = \"big-button\">";
            // line 60
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["bottom"] ?? null), "content", []), "field_sign_up", []), "html", null, true));
            echo "</div>

  </";
            // line 62
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 64
        echo "
</";
        // line 65
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["wrapper"] ?? null), "html", null, true));
        echo ">
";
    }

    public function getTemplateName()
    {
        return "themes/custom/ur_connected/templates/bs-2col-stacked--node-full.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  177 => 65,  174 => 64,  169 => 62,  164 => 60,  158 => 59,  156 => 58,  153 => 57,  148 => 55,  143 => 53,  139 => 52,  135 => 51,  131 => 50,  127 => 49,  121 => 46,  115 => 45,  113 => 44,  110 => 43,  105 => 41,  101 => 40,  95 => 37,  91 => 36,  87 => 35,  82 => 33,  76 => 32,  74 => 31,  71 => 30,  66 => 28,  62 => 27,  56 => 26,  54 => 25,  49 => 23,  43 => 22,);
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
 * Bootstrap Layouts: \"2 Columns (stacked)\" template.
 *
 * Available layout variables:
 * - wrapper: Wrapper element for the layout container.
 * - attributes: Wrapper attributes for the layout container.
 *
 * Available region variables:
 * - top
 * - left
 * - right
 * - bottom
 *
 * Each region variable contains the following properties:
 * - wrapper: The HTML element to use to wrap this region.
 * - attributes: The HTML attributes to use on the wrapper for this region.
 * - content: The content to go inside the wrapper for this region.
 */
#}
<{{ wrapper }}{{ attributes }}>
  {{ title_suffix.contextual_links }}

  {% if top.content %}
  <{{ top.wrapper }}{{ top.attributes }}>
    {{ top.content }}
  </{{ top.wrapper }}>
  {% endif %}

  {% if left.content %}
  <{{ left.wrapper }}{{ left.attributes }}>
    <h1>{{ left.content.field_event_name }} </h1>
<div class = \"flex-event-info\" >
    {{ right.content.field_company_name }} |
    {{ right.content.field_date}} |
    {{ right.content.field_cost}}
</div>
    <h1>Description</h1>
    {{ left.content.body}}
  </{{ left.wrapper }}>
  {% endif %}

  {% if right.content %}
  <{{ right.wrapper }}{{ right.attributes }}>
    <div class = \"big-button\">{{ right.content.field_rsvp_now }}</div>
<h1>Details </h1>
<div class = \"details-container\">
    {{ right.content.field_company_name }}
    {{ right.content.field_date }}
    {{ right.content.field_cost }}
    {{ right.content.field_category }}
    {{ right.content.field_location }}
</div>
  </{{ right.wrapper }}>
  {% endif %}

  {% if bottom.content %}
  <{{ bottom.wrapper }}{{ bottom.attributes }}>
    <div class = \"big-button\">{{ bottom.content.field_sign_up }}</div>

  </{{ bottom.wrapper }}>
  {% endif %}

</{{ wrapper }}>
", "themes/custom/ur_connected/templates/bs-2col-stacked--node-full.html.twig", "/Applications/MAMP/htdocs/themes/custom/ur_connected/templates/bs-2col-stacked--node-full.html.twig");
    }
}
