<?php

/* modules/contrib/bootstrap_layouts/templates/3.0.0/bs-2col-bricked.html.twig */
class __TwigTemplate_c535dce40ed24b813089a4e770609ba62774295c5ae95dab4d310e19d38cd33f extends Twig_Template
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
        $tags = ["if" => 28];
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
        echo "<";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["wrapper"] ?? null), "html", null, true));
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["attributes"] ?? null), "html", null, true));
        echo ">
  ";
        // line 26
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["title_suffix"] ?? null), "contextual_links", []), "html", null, true));
        echo "

  ";
        // line 28
        if ($this->getAttribute(($context["top"] ?? null), "content", [])) {
            // line 29
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top"] ?? null), "attributes", []), "html", null, true));
            echo ">
    ";
            // line 30
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top"] ?? null), "content", []), "html", null, true));
            echo "
  </";
            // line 31
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 33
        echo "
  ";
        // line 34
        if ($this->getAttribute(($context["top_left"] ?? null), "content", [])) {
            // line 35
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top_left"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top_left"] ?? null), "attributes", []), "html", null, true));
            echo ">
    ";
            // line 36
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top_left"] ?? null), "content", []), "html", null, true));
            echo "
  </";
            // line 37
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top_left"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 39
        echo "
  ";
        // line 40
        if ($this->getAttribute(($context["top_right"] ?? null), "content", [])) {
            // line 41
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top_right"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top_right"] ?? null), "attributes", []), "html", null, true));
            echo ">
    ";
            // line 42
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top_right"] ?? null), "content", []), "html", null, true));
            echo "
  </";
            // line 43
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["top_right"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 45
        echo "
  ";
        // line 46
        if ($this->getAttribute(($context["middle"] ?? null), "content", [])) {
            // line 47
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["middle"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["middle"] ?? null), "attributes", []), "html", null, true));
            echo ">
    ";
            // line 48
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["middle"] ?? null), "content", []), "html", null, true));
            echo "
  </";
            // line 49
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["middle"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 51
        echo "
  ";
        // line 52
        if ($this->getAttribute(($context["bottom_left"] ?? null), "content", [])) {
            // line 53
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom_left"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom_left"] ?? null), "attributes", []), "html", null, true));
            echo ">
    ";
            // line 54
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom_left"] ?? null), "content", []), "html", null, true));
            echo "
  </";
            // line 55
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom_left"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 57
        echo "
  ";
        // line 58
        if ($this->getAttribute(($context["bottom_right"] ?? null), "content", [])) {
            // line 59
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom_right"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom_right"] ?? null), "attributes", []), "html", null, true));
            echo ">
    ";
            // line 60
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom_right"] ?? null), "content", []), "html", null, true));
            echo "
  </";
            // line 61
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom_right"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 63
        echo "
  ";
        // line 64
        if ($this->getAttribute(($context["bottom"] ?? null), "content", [])) {
            // line 65
            echo "  <";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom"] ?? null), "wrapper", []), "html", null, true));
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom"] ?? null), "attributes", []), "html", null, true));
            echo ">
    ";
            // line 66
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom"] ?? null), "content", []), "html", null, true));
            echo "
  </";
            // line 67
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["bottom"] ?? null), "wrapper", []), "html", null, true));
            echo ">
  ";
        }
        // line 69
        echo "
</";
        // line 70
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["wrapper"] ?? null), "html", null, true));
        echo ">
";
    }

    public function getTemplateName()
    {
        return "modules/contrib/bootstrap_layouts/templates/3.0.0/bs-2col-bricked.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  194 => 70,  191 => 69,  186 => 67,  182 => 66,  176 => 65,  174 => 64,  171 => 63,  166 => 61,  162 => 60,  156 => 59,  154 => 58,  151 => 57,  146 => 55,  142 => 54,  136 => 53,  134 => 52,  131 => 51,  126 => 49,  122 => 48,  116 => 47,  114 => 46,  111 => 45,  106 => 43,  102 => 42,  96 => 41,  94 => 40,  91 => 39,  86 => 37,  82 => 36,  76 => 35,  74 => 34,  71 => 33,  66 => 31,  62 => 30,  56 => 29,  54 => 28,  49 => 26,  43 => 25,);
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
<{{ wrapper }}{{ attributes }}>
  {{ title_suffix.contextual_links }}

  {% if top.content %}
  <{{ top.wrapper }}{{ top.attributes }}>
    {{ top.content }}
  </{{ top.wrapper }}>
  {% endif %}

  {% if top_left.content %}
  <{{ top_left.wrapper }}{{ top_left.attributes }}>
    {{ top_left.content }}
  </{{ top_left.wrapper }}>
  {% endif %}

  {% if top_right.content %}
  <{{ top_right.wrapper }}{{ top_right.attributes }}>
    {{ top_right.content }}
  </{{ top_right.wrapper }}>
  {% endif %}

  {% if middle.content %}
  <{{ middle.wrapper }}{{ middle.attributes }}>
    {{ middle.content }}
  </{{ middle.wrapper }}>
  {% endif %}

  {% if bottom_left.content %}
  <{{ bottom_left.wrapper }}{{ bottom_left.attributes }}>
    {{ bottom_left.content }}
  </{{ bottom_left.wrapper }}>
  {% endif %}

  {% if bottom_right.content %}
  <{{ bottom_right.wrapper }}{{ bottom_right.attributes }}>
    {{ bottom_right.content }}
  </{{ bottom_right.wrapper }}>
  {% endif %}

  {% if bottom.content %}
  <{{ bottom.wrapper }}{{ bottom.attributes }}>
    {{ bottom.content }}
  </{{ bottom.wrapper }}>
  {% endif %}

</{{ wrapper }}>
", "modules/contrib/bootstrap_layouts/templates/3.0.0/bs-2col-bricked.html.twig", "/Applications/MAMP/htdocs/modules/contrib/bootstrap_layouts/templates/3.0.0/bs-2col-bricked.html.twig");
    }
}
