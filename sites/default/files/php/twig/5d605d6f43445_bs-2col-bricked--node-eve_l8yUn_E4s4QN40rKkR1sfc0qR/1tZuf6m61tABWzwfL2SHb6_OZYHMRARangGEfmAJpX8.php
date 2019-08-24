<?php

/* themes/custom/ur_connected/templates/bs-2col-bricked--node-event-mini-teaser.html.twig */
class __TwigTemplate_ac20ba022f176b2fc40dbd05909fc408a32cb697d26a628e55e72c341f645206 extends Twig_Template
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
        $tags = ["if" => 30];
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

        // line 25
        echo "<div class = \"event-mini-teaser\">
<";
        // line 26
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["wrapper"] ?? null), "html", null, true));
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["attributes"] ?? null), "html", null, true));
        echo ">
  ";
        // line 27
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["title_suffix"] ?? null), "contextual_links", []), "html", null, true));
        echo "


  ";
        // line 30
        if ($this->getAttribute(($context["top"] ?? null), "content", [])) {
            // line 31
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top"] ?? null), "attributes", []), "html", null, true));
            echo ">
    ";
            // line 32
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["top"] ?? null), "content", []), "field_event_name", []), "html", null, true));
            echo "
  </";
            // line 33
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 35
        echo "
  ";
        // line 36
        if ($this->getAttribute(($context["top_left"] ?? null), "content", [])) {
            // line 37
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top_left"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top_left"] ?? null), "attributes", []), "html", null, true));
            echo ">
    ";
            // line 38
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["top_left"] ?? null), "content", []), "field_image_", []), "html", null, true));
            echo "
  </";
            // line 39
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top_left"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 41
        echo "<div class = \"event-mini-teaser-inner\">
  ";
        // line 42
        if ($this->getAttribute(($context["top_right"] ?? null), "content", [])) {
            // line 43
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top_right"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top_right"] ?? null), "attributes", []), "html", null, true));
            echo ">
    ";
            // line 44
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["top_right"] ?? null), "content", []), "field_date", []), "html", null, true));
            echo "
  </";
            // line 45
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top_right"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 47
        echo "
  ";
        // line 48
        if ($this->getAttribute(($context["bottom_right"] ?? null), "content", [])) {
            // line 49
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom_right"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom_right"] ?? null), "attributes", []), "html", null, true));
            echo ">
    <span class = \"p-button\">";
            // line 50
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["bottom_right"] ?? null), "content", []), "field_details", []), "html", null, true));
            echo "</span>
  </";
            // line 51
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom_right"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 53
        echo "</div>

</";
        // line 55
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["wrapper"] ?? null), "html", null, true));
        echo ">
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/ur_connected/templates/bs-2col-bricked--node-event-mini-teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  138 => 55,  134 => 53,  129 => 51,  125 => 50,  119 => 49,  117 => 48,  114 => 47,  109 => 45,  105 => 44,  99 => 43,  97 => 42,  94 => 41,  89 => 39,  85 => 38,  79 => 37,  77 => 36,  74 => 35,  69 => 33,  65 => 32,  59 => 31,  57 => 30,  51 => 27,  46 => 26,  43 => 25,);
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
 * - top_left
 * - top_right
 * - middle
 * - bottom_left
 * - bottom_right
 * - bottom
 *
 * Each region variable contains the following properties:
 * - wrapper: The HTML element to use to wrap this region.
 * - attributes: The HTML attributes to use on the wrapper for this region.
 * - content: The content to go inside the wrapper for this region.
 */
#}
<div class = \"event-mini-teaser\">
<{{ wrapper }}{{ attributes }}>
  {{ title_suffix.contextual_links }}


  {% if top.content %}
  <{{ top.wrapper }}{{ top.attributes }}>
    {{ top.content.field_event_name }}
  </{{ top.wrapper }}>
  {% endif %}

  {% if top_left.content %}
  <{{ top_left.wrapper }}{{ top_left.attributes }}>
    {{ top_left.content.field_image_ }}
  </{{ top_left.wrapper }}>
  {% endif %}
<div class = \"event-mini-teaser-inner\">
  {% if top_right.content %}
  <{{ top_right.wrapper }}{{ top_right.attributes }}>
    {{ top_right.content.field_date }}
  </{{ top_right.wrapper }}>
  {% endif %}

  {% if bottom_right.content %}
  <{{ bottom_right.wrapper }}{{ bottom_right.attributes }}>
    <span class = \"p-button\">{{ bottom_right.content.field_details }}</span>
  </{{ bottom_right.wrapper }}>
  {% endif %}
</div>

</{{ wrapper }}>
</div>
", "themes/custom/ur_connected/templates/bs-2col-bricked--node-event-mini-teaser.html.twig", "/Applications/MAMP/ur-connected/themes/custom/ur_connected/templates/bs-2col-bricked--node-event-mini-teaser.html.twig");
    }
}
